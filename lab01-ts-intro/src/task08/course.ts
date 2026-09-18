interface Course {
  name: string;
  durationHours: number;
  students: string[];
}

class OnlineCourse implements Course {
  public name: string;
  public durationHours: number;
  public students: string[];

  constructor(name: string, durationHours: number) {
    this.name = name;
    this.durationHours = durationHours;
    this.students = [];
  }

  public isStudentRegistered(student: string): boolean {
    return this.students.includes(student);
  }

  public registerStudent(student: string): void {
    if (this.isStudentRegistered(student)) {
      console.warn(`Студент ${student} вже зареєстрований на курс "${this.name}".`);
      return;
    }
    this.students.push(student);
  }
}

class CourseManager {
  private courses: Course[] = [];

  public addCourse(course: Course): void {
    const exists = this.courses.some((c) => c.name === course.name);
    if (exists) {
      console.warn(`Курс із назвою "${course.name}" уже існує.`);
      return;
    }
    this.courses.push(course);
  }

  public removeCourse(courseName: string): void {
    this.courses = this.courses.filter((course) => course.name !== courseName);
  }

  public findCourse(courseName: string): Course | undefined {
    return this.courses.find((course) => course.name === courseName);
  }

  public getAllCourses(): Course[] {
    return this.courses;
  }
}

const tsCourse = new OnlineCourse("TypeScript Fundamentals", 40);
const nodeCourse = new OnlineCourse("Node.js Backend Architecture", 60);
const reactCourse = new OnlineCourse("React & Modern Web", 50);

tsCourse.registerStudent("Олександр");
tsCourse.registerStudent("Марія");
tsCourse.registerStudent("Олександр");

nodeCourse.registerStudent("Іван");
nodeCourse.registerStudent("Марія");

const manager = new CourseManager();
manager.addCourse(tsCourse);
manager.addCourse(nodeCourse);
manager.addCourse(reactCourse);

manager.getAllCourses().forEach((course) => {
  console.log(`\nКурс: ${course.name} (${course.durationHours} год.)`);
  if (course.students.length === 0) {
    console.log("  Зареєстровані студенти: (список порожній)");
  } else {
    console.log(`  Зареєстровані студенти: ${course.students.join(", ")}`);
  }
});
