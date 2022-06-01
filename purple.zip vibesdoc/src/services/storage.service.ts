class Storage {
  public get = (key: string): string => localStorage.getItem(key);

  public getObject = (key: string): Object => JSON.parse(this.get(key));

  public set = (key: string, data: string) => {
    localStorage.setItem(key, data);
  };

  public setObject = (key: string, data: Object) => {
    this.set(key, JSON.stringify(data));
  };

  public remove = (key: string) => {
    localStorage.removeItem(key);
  };
}

const storage = new Storage();

export default storage;
export { Storage };
