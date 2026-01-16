from threading import *
import time
cond=Condition()
done=1
def task(name):
    global done
    with cond:
        if done==1:
            done=2
            print("waiting on condition variable cond:",name)
            cond.wait()
            print("condition met: ",name)
        else :
            for i in range(5):
                print('curr= ',i,' curr+1= ',i+1)
                time.sleep(1)
            print("signaling condition variable cond",name)
            cond.notify_all()
            print("notification done",name)

if __name__=='__main__':
    t1=Thread(target=task,args=('t1',))
    t2=Thread(target=task,args=('t1',))
    
    t1.start()
    t2.start()
    t1.join()
    t2.join()
