import mypackage.*;
class Pen{
    String type;
    String color;
    public void write(){
        // System.out.println("i m writing");
    }
    public void print(){
        // System.out.println(this.color);
    }
}
class Student{
    String name;
    int age;
    public void printinfo(){
        System.out.println(this.name);
        System.out.println(this.age);
    }
    Student(String Name,int Age){                              // parameterised constructor
        System.out.println("Student Constructor called");
        this.name=Name;
        this.age=Age;
        System.out.println("Name= "+Name+" Age= "+Age);
    }
}
public class oops {
    public static void main(String args[]){
        mypackage.Account acc1=new mypackage.Account();
        acc1.name="rohan";
        System.out.println(acc1.name);
    }
}
