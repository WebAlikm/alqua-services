import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const listings = JSON.parse(readFileSync(new URL('../data/sample-listings.json', import.meta.url), 'utf8'));
const required = ['id','type','category','audience','title','summary','urgency','location','contact','whatsapp','mapUrl','source','lastUpdated'];

test('the sample dataset is nonempty and listing IDs are unique', () => {
  assert.ok(Array.isArray(listings) && listings.length > 0);
  assert.equal(new Set(listings.map((entry) => entry.id)).size, listings.length);
});

test('every listing has required fields and bilingual text', () => {
  for (const item of listings) {
    for (const key of required) {
      assert.ok(Object.hasOwn(item, key), `Missing ${key} in ${item.id ?? 'unknown listing'}`);
    }
    for (const field of ['title','summary']) {
      for (const language of ['ar','en']) {
        assert.equal(typeof item[field][language], 'string', `${item.id}: ${field}.${language}`);
        assert.ok(item[field][language].trim(), `${item.id}: empty ${field}.${language}`);
      }
    }
    assert.ok(Array.isArray(item.audience) && item.audience.length > 0, item.id);
  }
});

test('listing values have supported types, categories and priorities', () => {
  const types = new Set(['service','event','opportunity']);
  const categories = new Set(['healthcare','education','business','community','farm-services']);
  const priorities = new Set(['normal','this-week','urgent']);
  for (const item of listings) {
    assert.ok(types.has(item.type), `Unexpected type in ${item.id}`);
    assert.ok(categories.has(item.category), `Unexpected category in ${item.id}`);
    assert.ok(priorities.has(item.urgency), `Unexpected urgency in ${item.id}`);
  }
});

test('external action links have expected schemes', () => {
  for (const item of listings) {
    assert.match(item.whatsapp, /^https:\/\/wa\.me\/\d+$/);
    assert.match(item.mapUrl, /^https:\/\//);
    assert.match(item.contact, /^\+\d+$/);
  }
});
