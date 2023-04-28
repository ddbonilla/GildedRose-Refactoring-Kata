const { Shop, Item } = require("../src/gilded_rose");
let gildedRose, item1, item2, item3, item4, item5;

describe("Gilded Rose", () => {
  beforeEach(() => {
    gildedRose = new Shop();

    item1 = new Item("Age Brie", 10, 4);
    item2 = new Item("Sulfuras", 0, 80);
    item3 = new Item("Backstage passes", 9, 30);
    item4 = new Item("Conjured", 10, 7);
    item5 = new Item("fixme", 10, 0);

    gildedRose.shopItems.push(item1, item2, item3, item4, item5);

    gildedRose.handleInventory();
    gildedRose.decreaseSellByDate();

  });

  it("should decreases normal items' quality twice as fast if sellBy date has passed", function () {
    expect(gildedRose.shopItems[4].quality).toBe(0);
  });

  it("should increase Age Brie's quality twice as fast(normal items) the older it gets", function () {
    expect(gildedRose.shopItems[0].quality).toBe(6);
  });

  it("should not change Sulfuras (Legendary Item) sell by date and quality", function () {
    expect(gildedRose.shopItems[1].quality).toBe(80);
  });

  it("should increase Backstage passes quality either 2 or 3 by the  sell by date or drop it to 0", function () {
    expect(gildedRose.shopItems[2].quality).toBe(32);
  });

  it("should decreases Conjured's quality twice as fast as normal items if sellBy date has passed", function () {
    expect(gildedRose.shopItems[3].quality).toBe(3);
  });

  it("should decreases all items's sell by date by one, except for legendary items", function () {
    expect(gildedRose.shopItems[0].sellDateBy).toBe(9);
    expect(gildedRose.shopItems[1].sellDateBy).toBe(0);
  });
});
