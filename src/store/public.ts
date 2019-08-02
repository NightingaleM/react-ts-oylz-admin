import { observable, action } from "mobx";

interface initialData {
  name: string;
}
class PublicStore {
  constructor(initialData: initialData) {
    this.name = initialData.name || "PublicStore";
  }

  @observable
  name: string;

  @action
  Do() {
    this.name = this.name + "=>>";
  }
}

export default PublicStore;
