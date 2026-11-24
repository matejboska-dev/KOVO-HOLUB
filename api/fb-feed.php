<?php
/**
 * KOVO-HOLUB — Facebook Page Feed JSON endpoint (cache 60 min)
 *
 * Jak zprovoznit za 2 minuty:
 * 1. V Meta for Developers (nebo přes proměnnou prostředí FB_PAGE_TOKEN na hostingu)
 *    doplňte dlouhodobý Page Access Token pro stránku kovoholub (opravy: pages_read_engagement).
 * 2. Na HTML stránkách nastavte `window.KH_FB_FEED_URL = 'api/fb-feed.php';` (nebo atribut data-fb-feed="api/fb-feed.php").
 *    Horizontální slider v js/pages.js pak automaticky nahradí výchozí Facebook iframe.
 */

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: public, max-age=900');

$pageId = 'kovoholub';
$token = getenv('FB_PAGE_TOKEN') ?: ''; // <-- Případně vložte dlouhodobý Page Access Token přímo sem
$limit = 10;
$cacheFile = __DIR__ . '/.fb-cache.json';
$cacheTtl = 3600; // 1 hodina

if (!$token) {
    http_response_code(503);
    echo json_encode(['error' => 'FB_PAGE_TOKEN is not configured', 'items' => []]);
    exit;
}

if (is_file($cacheFile) && (time() - filemtime($cacheFile)) < $cacheTtl) {
    readfile($cacheFile);
    exit;
}

$fields = 'id,message,created_time,permalink_url,full_picture';
$url = sprintf(
    'https://graph.facebook.com/v21.0/%s/posts?fields=%s&limit=%d&access_token=%s',
    rawurlencode($pageId),
    rawurlencode($fields),
    $limit,
    rawurlencode($token)
);

$ctx = stream_context_create([
    'http' => ['timeout' => 8, 'ignore_errors' => true],
]);
$raw = @file_get_contents($url, false, $ctx);
$decoded = $raw ? json_decode($raw, true) : null;

if (!$decoded || empty($decoded['data'])) {
    if (is_file($cacheFile)) {
        readfile($cacheFile);
        exit;
    }
    http_response_code(502);
    echo json_encode(['error' => 'Unable to fetch Facebook Graph API', 'items' => []]);
    exit;
}

$items = [];
foreach ($decoded['data'] as $post) {
    $text = trim((string)($post['message'] ?? ''));
    if ($text === '' && empty($post['full_picture'])) {
        continue;
    }
    $items[] = [
        'id' => (string)($post['id'] ?? ''),
        'url' => (string)($post['permalink_url'] ?? 'https://www.facebook.com/kovoholub'),
        'date_published' => (string)($post['created_time'] ?? ''),
        'content_text' => $text,
        'image' => (string)($post['full_picture'] ?? ''),
    ];
}

$payload = json_encode([
    'source' => 'facebook-graph-api',
    'updated_at' => gmdate('c'),
    'items' => $items,
], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

@file_put_contents($cacheFile, $payload);
echo $payload;
