#include<bits/stdc++.h>
#include<iostream>
#include<thread>
#include<chrono>
#include<semaphore>
using namespace std;
// Declaration of semaphores
counting_semaphore<10> empty_val(10),full_val(0);
binary_semaphore mtx{1};
void producer(){
    while(1){
        empty_val.acquire();      //wait(empty) -> wait untill empty>0
        mtx.acquire();    // wait(mutex);
        // critical section add data to buffer.
        mtx.release();                    //signal(mutex);
        full_val.release();                    //signal(full);
        this_thread::sleep_for(chrono::milliseconds(500));
    }
}
void consumer(){
    while(1){
        full_val.acquire();      //wait(full)  -> wait untill full>0
        mtx.acquire();    // wait(mutex);
        //critical section remove data from buffer.
        mtx.release();                        //signal(mutex);
        empty_val.release();                        //signal(empty);
        this_thread::sleep_for(chrono::milliseconds(500));
    }
}
int main(){
    thread t1(producer);
    thread t2(consumer);
    t1.join();
    t2.join();
    return 0;
}