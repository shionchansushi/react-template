export class SomeType {
  private id: number;
  private name: string;
  private description?: string;

  constructor(id: number, name: string, description = '') {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  getId() {
    return this.id;
  }
  setId(id: number) {
    this.id = id;
  }

  getName() {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }

  getDescription() {
    return this.description;
  }
  setDescription(description?: string) {
    this.description = description;
  }
}
