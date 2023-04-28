class Item {
  constructor(name, sellDateBy, quality) {
    this.name = name;
    this.sellDateBy = sellDateBy;
    this.quality = quality;
  }
}

const LEGENDARY_QUAL = 80;
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
      } else if (item.name === "Backstage passes") {
        this.handleBackstage(item);
      } else if (item.name === "Conjured") {
        this.handleConjured(item);
      } else {
        this.decreaseQuality(item);
      }
    });
  }

  handleAgedBrie(item) {
    if (item.sellDateBy > 0 && item.quality < MAX_QUAL) {
      return (item.quality += 2);
    }
  }

  handleLegendary() {
    LEGENDARY.map((item) => {
      if (item.name === "Sulfuras") {
        return (item.quality = LEGENDARY_QUAL);
      }
    });
  }

  handleBackstage(item) {
    if (item.sellDateBy === 0) {
      return (item.quality = 0);
    }

    if (item.sellDateBy <= 5 && item.quality < MAX_QUAL) {
      return (item.quality += 3);
    } else {
      return (item.quality += 2);
    }
  }

  handleConjured(item) {
    if (item.sellDateBy > 0) {
      return (item.quality -= 4);
    }
  }

  decreaseQuality(item) {
    if (item.sellDateBy > 0 && item.quality > MIN_QUAL) {
      return (item.quality -= 2);
    }
  }

  decreaseSellByDate() {
    this.shopItems.map((item) => {
      if (item.sellDateBy > 0 && item.name !== "Sulfuras") {
        return (item.sellDateBy -= 1);
      }
    });
  }
}

module.exports = { Item, Shop };
