#include<bits/stdc++.h>
#include<iostream>
#include<thread>
#include<chrono>
#include<semaphore>
using namespace std;
int rc=0;   //reader count
binary_semaphore wrt{1};
binary_semaphore mtx{1};
void writer(){  //writing section 
    while(1){
        wrt.acquire();    //wait(wrt);
        // continue writing
        cout<<"writer is still writing."<<endl;
        this_thread::sleep_for(chrono::milliseconds(500));
        wrt.release();    //signal(wrt);
    }
}
void reader(){  //Reading section
    while(1){
        mtx.acquire();   //  wait(mutex);
        rc++;
        if(rc==1){
            wrt.acquire();  //wait(wrt);
        }
        mtx.release();  //signal(mutex);
        // continue reading
        cout<<"Reader is still reading."<<endl;
        this_thread::sleep_for(chrono::milliseconds(500));
        mtx.acquire();  //wait(mutex);
        rc--;
        if(rc==0)wrt.release();  //signal(wrt);
        mtx.release();  //signal(mutex);
    }
}
int main(){
    thread t1(writer);
    thread t2(reader);
    t1.join();
    t2.join();
    return 0;
}