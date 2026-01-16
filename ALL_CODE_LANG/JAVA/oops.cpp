#include<iostream>
#include<string>
using namespace std;
class human{
    public:
        string category;
    human(){cout<<"HUman constructor formed"<<endl;}
    ~human(){cout<<"Human destructor destroyed"<<endl;}
};
class teacher: public human{
 private:
    double salary;
    double password=987654;
 public:
    static string school;
    string name;
    string dept;
    string subject;
    void changedept(string newdpt){
        this->dept=newdpt;
    }
    void setsalary(double sal){
        this->salary=sal;
    }
    double getsalary(){
        cout<<"new salary= "<<this->salary<<endl;
    }
    teacher(){
        // dept="Computer Science";
        cout<<"teacher constructor formed"<<endl;
    }
    void setpassword(double key){
        for(int i=3;i>=1;i--){
            cout<<"enter old password(numbers only): ";
            double pass;
            cin>>pass;
            cout<<endl;
            if(pass==password){
                this->password=key;
                cout<<"Password reset successfull"<<endl;
                break;
            }
            else {cout<<"invalid password. Only "<<i-1<<" -chances left."<<endl<<endl;}
        }
    }
    ~teacher(){cout<<"teacher destructor destroyed"<<endl;}
};
class student : public human{
    public:
        string name;
        double* cgpa;
    void setcg(string name,double cg){
        this->name=name;
        cgpa=new double;
        *cgpa=cg;
    }
    student (string name,double cg){       //shallow copy of constructor formed.   .i.e. changing one pointer affets other pointer also.
        this->name=name;
        cgpa=new double;
        *cgpa=cg;
    }
    student(student &object){              //deep copy of constructor formed.i.e. changing one pointer doesn't affet other pointer.
        this->name=object.name;
        cgpa=new double;
        *cgpa=*object.cgpa;
    }
    void getinfo(){
        cout<<"name: "<<this->name<<endl;
        cout<<"cgpa: "<<*cgpa<<endl;
        cout<<"category: "<<category<<endl;
    }
    //Destructor must start with negation and must have same class name as constructor.
    ~student(){
        cout<<"I am student Destructor, delete every heap memory allocated"<<endl;
        delete cgpa;                     // this actually deletes the dynamic memory allocated.
    }
};
string teacher::school="Vivekanand";
int main(){
    human h;
    h.category="Insaan";
    teacher t1;
    t1.dept="cse";
    t1.name="shradha";
    t1.subject="C++";
    t1.setsalary(46000);
    t1.getsalary();
    cout<<"school= "<<t1.school<<endl;
    teacher t2;
    cout<<"department= "<<t2.dept<<endl;
    cout<<"Do you want to set password(Y/N): ";
    char reply;cin>>reply;
    if(reply=='y'||reply=='Y'){
        cout<<"enter your new password(numbers only): ";
        double nwpas;
        cin>>nwpas;
        t1.setpassword(nwpas);
    }
    else cout<<"Have a nice Day.";

    // student
    student s1("ram",8.5);
    s1.setcg("ram",8.5);
    cout<<"student constructor copied:"<<endl;
    student s2(s1);
    s2.name="chandra";
    s1.getinfo();

    *(s2.cgpa)=9.5;      //updating cg of s2(copy of s1) also updates cg of s1, this problem is due to shallow copy characteristics.-> resolved using deep copy.
    s1.getinfo();
    s2.getinfo();
}