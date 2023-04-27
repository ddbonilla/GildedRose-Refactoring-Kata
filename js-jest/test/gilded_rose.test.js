const { Shop, Item } = require("../src/gilded_rose");
let gildedRose, item1, item2, item3, item4, item5;

// - Once the sell by date has passed, Quality degrades twice as fast
// - The Quality of an item is never negative
// - The Quality of an item is never more than 50
// - "Aged Brie" actually increases in Quality the older it gets
// - "Sulfuras", being a legendary item, never has to be sold or decreases in Quality



// - "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
// Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
// Quality drops to 0 after the concert
// - "Conjured" items degrade in Quality twice as fast as normal items

describe("Gilded Rose", () => {
  beforeEach(() => {
    gildedRose = new Shop();

    item1 = new Item("Age Brie", 10, 4);
    item2 = new Item("Sulfuras", 0, 50);
    item3 = new Item("Backstage passes", 0, 0);
    item4 = new Item("Conjured", 10, 7);
    item5 = new Item("fixme", 10, 0);

    gildedRose.shopItems.push(item1, item2, item3, item4, item5);

    gildedRose.handleInventory();

  });

  it("should decreases quality twice as fast(normal items) if sellBy date has passed", function () {
    expect(gildedRose.shopItems[3].quality).toBe(5);
    expect(gildedRose.shopItems[4].quality).toBe(0);
  });

  it("should increase Age Brie's quality twice as fast(normal items) the older it gets", function () {
    expect(gildedRose.shopItems[0].quality).toBe(6);
  });

  it("should not change Sulfuras (Legendary Item) sell by date and quality", function () {
    expect(gildedRose.shopItems[1].quality).toBe(50);
  });

});
