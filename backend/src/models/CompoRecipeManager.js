const AbstractManager = require("./AbstractManager");

class compoRecipeManager extends AbstractManager {
  constructor() {
    super({ table: "compoRecipe" });
  }

  insert(compoRecipe) {
    return this.database.query(
      `insert into ${this.table} (percentage, user_id, user_account_ID, wineBottle_id) values (?,?,?,?)`,
      [
        compoRecipe.percentage,
        compoRecipe.user_id,
        compoRecipe.user_account_ID,
        compoRecipe.wineBottle_id,
      ]
    );
  }

  update(compoRecipe) {
    return this.database.query(
      `update ${this.table} set percentage = ? where id = ?`,
      [compoRecipe.percentage, compoRecipe.id]
    );
  }
}
module.exports = compoRecipeManager;
