/* eslint-disable no-undef */
const assert = require('assert');

// eslint-disable-next-line no-undef
Feature('fondness restaurant');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/');
  I.wait(3);
});

Scenario('showing empty fondness restaurant', ({ I }) => {
  I.amOnPage('/#/like');
  I.wait(5); // Menambah waktu tunggu
  I.seeElement('.restaurants');
  I.wait(3);
  I.see('You dont have any favorite Restaurant', '.restaurants');
});

Scenario('fondness one restaurant', async ({ I }) => {
  I.amOnPage('/#/home');
  I.wait(5); // Menambah waktu tunggu
  I.seeElement('h3 a');
  const firstResto = locate('h3 a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.wait(5); // Menambah waktu tunggu
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(5); // Menambah waktu tunggu
  I.amOnPage('/#/like');
  I.wait(5); // Menambah waktu tunggu
  I.seeElement('.restaurant-item');
  const likedRestoTitle = await I.grabTextFrom('h3 a');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('unfondness one restaurant', async ({ I }) => {
  I.amOnPage('/#/home');
  I.wait(5); // Menambah waktu tunggu

  // like restaurant first
  I.seeElement('h3 a');
  const firstCard = locate('h3 a').first();
  I.click(firstCard);
  I.wait(5); // Menambah waktu tunggu
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // unlike restaurant
  I.amOnPage('/#/like');
  I.wait(5); // Menambah waktu tunggu
  I.seeElement('h3 a');
  const firstLikedCard = locate('h3 a').first();
  I.click(firstLikedCard);
  I.wait(5); // Menambah waktu tunggu
  I.seeElement('#likeButton');
  I.click('#likeButton');
});
