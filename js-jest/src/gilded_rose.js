class Item {
  constructor(name, sellDateBy, quality) {
    this.name = name;
    this.sellDateBy = sellDateBy;
    this.quality = quality;
  }
}

const MAX_QUAL = 50;
const MIN_QUAL = 0;
const LEGENDARY = ["Sulfuras"];

class Shop {
  constructor() {
    this.shopItems = [];
  }

  handleInventory() {
    this.shopItems.map((item) => {
      if (item.name === "Age Brie") {
        this.handleAgedBrie(item);
      } else if (item.name === "Sulfuras") {
        this.handleLegendary(item);
      } else {
        this.decreaseQuality(item);
      }
    });
  }

  handleAgedBrie(item) {
    if (item.sellDateBy > 0) {
      return (item.quality += 2);
    }
  }

  decreaseQuality(item) {
    if (item.sellDateBy > 0 && item.quality > MIN_QUAL) {
      return (item.quality -= 2);
    }
  }

  handleLegendary(item) {
    return 0;
  }
}

module.exports = { Item, Shop };
