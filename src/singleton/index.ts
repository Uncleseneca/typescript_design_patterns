export class Application {

  public main() {
    const database = InitializedDatabase.getInstance()
    const extraDatabase = InitializedDatabase.getInstance()

    console.log('databases are the same', database === extraDatabase)
  }
}

class Database {
  private instance: Database

  constructor() {
    console.log('initializing database instance')
  }

  public getInstance() {
    if (!this.instance) {
      this.instance = new Database()
    }
    return this.instance
  }

  public query(sql) {
    console.log(sql)
  }
}

const InitializedDatabase = new Database()
