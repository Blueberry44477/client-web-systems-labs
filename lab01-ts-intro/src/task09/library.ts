interface LibraryItem {
  title: string;
  author: string;
  isBorrowed: boolean;
  borrow(): void;
}

class Book implements LibraryItem {
  public title: string;
  public author: string;
  public pageCount: number;
  public isBorrowed: boolean;

  constructor(title: string, author: string, pageCount: number) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.isBorrowed = false;
  }

  public borrow(): void {
    if (this.isBorrowed) {
      console.warn(`Книга "${this.title}" вже позичена.`);
      return;
    }
    this.isBorrowed = true;
    console.log(`Книгу "${this.title}" успішно позичено.`);
  }
}

class Magazine implements LibraryItem {
  public title: string;
  public author: string;
  public issueNumber: number;
  public isBorrowed: boolean;

  constructor(title: string, author: string, issueNumber: number) {
    this.title = title;
    this.author = author;
    this.issueNumber = issueNumber;
    this.isBorrowed = false;
  }

  public borrow(): void {
    if (this.isBorrowed) {
      console.warn(`Журнал "${this.title}" (випуск #${this.issueNumber}) вже позичений.`);
      return;
    }
    this.isBorrowed = true;
    console.log(`Журнал "${this.title}" (випуск #${this.issueNumber}) успішно позичено.`);
  }
}

class DVD implements LibraryItem {
  public title: string;
  public author: string; // Режисер або автор контенту
  public durationMinutes: number;
  public isBorrowed: boolean;

  constructor(title: string, author: string, durationMinutes: number) {
    this.title = title;
    this.author = author;
    this.durationMinutes = durationMinutes;
    this.isBorrowed = false;
  }

  public borrow(): void {
    if (this.isBorrowed) {
      console.warn(`DVD "${this.title}" уже позичено.`);
      return;
    }
    this.isBorrowed = true;
    console.log(`DVD "${this.title}" успішно позичено.`);
  }
}

class Library {
  private items: LibraryItem[] = [];

  public addItem(item: LibraryItem): void {
    this.items.push(item);
  }

  public findItemByName(name: string): LibraryItem | undefined {
    return this.items.find((item) => item.title.toLowerCase() === name.toLowerCase());
  }

  public printAvailableItems(): void {
    const availableItems = this.items.filter((item) => !item.isBorrowed);

    console.log("\n--- Доступні елементи в бібліотеці ---");
    if (availableItems.length === 0) {
      console.log("Доступних елементів немає.");
      return;
    }

    availableItems.forEach((item) => {
      console.log(`- "${item.title}" | Автор: ${item.author}`);
    });
  }
}

const library = new Library();

const cleanCodeBook = new Book("Clean Code", "Robert C. Martin", 464);
const techMagazine = new Magazine("Wired", "Condé Nast", 312);
const inceptionDvd = new DVD("Inception", "Christopher Nolan", 148);

library.addItem(cleanCodeBook);
library.addItem(techMagazine);
library.addItem(inceptionDvd);

library.printAvailableItems();

const foundItem = library.findItemByName("Clean Code");
if (foundItem) {
  foundItem.borrow();
}

cleanCodeBook.borrow();

inceptionDvd.borrow();

library.printAvailableItems();
