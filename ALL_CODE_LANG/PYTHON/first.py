# .......# means the corresponding operation is ended, i.e. this is Rishabh Dubey style.

# print("Sudhanshu shekhar")  #.......#
# print("""hello
# babu
#sona""")   #.......#
# print('mohan')                #-->string
# print("second")               #-->string
# print('''third''')            #-->string
# print("""third""")            #-->string
# a=None
# print(a)
# a=True
# print("to kaise hain aaplog\nmain to thik hun")    #.......#
# # this is a comment line    #.......#
# """ this is multiple comment line"""    #.......#
# a="hello"
# print (a)    #.......#
# b=input() ## b=input("enter something")-> this is by default string input
# print(b)    #.......#
# b=int(input("enter number"))
# print(b)    #.......#
# c=eval(input("enter num= "))
# print(c)    #.......#
# d="wow"
# print(type(d))    #.......#
# e=45
# print(type(e))    #.......#
# print(4==1)    #.......#
# f=57
# g="wuy"
# print(g is f) # compares class type
# print (g is not f) # compares class type    #.......#
# print(bin(12))    #.......#
# a="hallo"
# print("h" in a)
# print("k" not in a)    #.......#
# marks=89
# if marks>=90: print ("great")
# elif marks<90 & marks>=85: print("not bad")  # use either ->(and) or ->(&) any one.
# else : print ("poor")

# Q:1-> write a program to input two numbers and print their sum.
# num1=int(input("enter first number: "))
# num2=int(input("enter second number: "))
# print("sum of two numbers is : ", num1+num2,"\n")
# print ("hello")

# Q"2-> write a program to input side of square and print its area.
# side=int(input("enter side of square: "))
# print("area of square: ",side*side)

# Q:3-> write average of two numbers.
# a=int(input("enter num1:="))
# b=float(input("enter num2: "))
# print("avg: ",(a+b)/2)

#Q:4-> check if a>=b
# a=int(input("enter num1: "))
# b=int(input("enter num2: "))
# if a>b: print(a," greater than",b)
# elif a==b: print(a," equal to",b)
# else :print(a," lesser than",b)

# a="apples"    #positive indexing:(0,1,2,3,4,5) also negative indexing(backward): (-5,-4,-3,-2,-1,0)
# print(a[2:4])  #SLICING:  a[inclusive(beginning):exclusive(end)]   i.e.from itr=2,3
# print(a[:3])   #from beginning to itr=2
# print(a[1:])   #from itr=1 to itr=n-1
# print(a[-4:-1]) #from itr=-4,-3,-2

#Q:5-> Input user's first name and print length and occurence of letter 'S'.
# str=input("enter first name: ")
# print("length of first name: ",len(str))
# print("count of s in first name: ",str.count("s"))

#Q:6-> check even or odd numbers.
# num=int(input("enter number: "))
# if(num&1): 
#     print("odd number")
# else : 
#     print("even number")
    
#Q:7-> find greatest of 3 numbers entered by user.
# a=int(input("enter first number: "))
# b=int(input("enter second number: "))
# c=int(input("enter third number: "))
# if(a>=b):
#     if(a>=c):
#         print(a," is greatest.")
#     else:
#         print(c," is greatest.")
# else:
#     if(b>=c):
#         print(b," is greatest.")
#     else:
#         print(c," is greatest.")

#Q:8-> check if number is divisible by 7 or not.
# num=int(input("enter number: "))
# if(num%7==0):
#     print(num, " is divisible by 7.")
# else :
#     print(num, " is not divisible by 7.")

# lists like arrays          #mutable i.e. both read(view ) and write(access/edit) type
# marks=[3,45.5,6,23.9,87.5]
# marks.insert(3,6)         #insert(itr,value)
# marks.append(8)           #push_back(8)
# marks.sort()
# marks.remove(6)        #remove first occurence of the element(val)
# marks.pop(4)           #pop element at itr=4
# print(type(marks))

# word=[45.6,"hello",68.3]
# print(type(word))
# box=[45.6,14.4,"hello",68.3,"ram","boom"]
# box.sort(key=str)    #numbers & string sorted apart 
# print(box)

#tuple : only read(view) type         -> same like lists(but support only view not edit)
# tup1=(4,6,3,7,5.6)                    # acts as tuple of size(5)
# print(type(tup1))
# tup2=()                               # acts as empty tuple
# print(type(tup2))
# tup3=(9)                              # acts like integer(stored) inside parenthesis, assigned to variable tup4, but not any tuple here.
# print(type(tup3))
# tup4=(4.9,)                           # acts as tuple of size(1), : to create tuple of size-1, write comma after the val.
# print(type(tup4))                     # for tuple of size>1, we can apply or not apply comma at end, no error.

#Q:9-> enter 3 film names and store them in a list.
# film1=input("enter fav1 film name: ")
# film2=input("enter fav2 film name: ")
# film3=input("enter fav3 film name: ")
# list=[]
# list.append(film1)
# list.append(film2)
# list.append(film3)
# print(list)

#Q:10-> from question 9, check if palindrome exists.
# arr1=list.copy()
# arr1.reverse()
# print(arr1)
# if(arr1==list): print("palindrome found")
# else : print("palindrome not found")

# Dictionary:
# dictionaryyy={
#     "table":[input("enter sth. about table"),input("enter sth. more about table")],
#     "cat":[input("enter sth. about cat")]
# }    
# print(dictionaryyy)

# for i in range(1,5,1): print(i)

#function definition and reccursion
# def check(i):
#     if(i>10):return 
#     print(i*2)
#     check(i+1)
    
# check(1)         #calling the function to operate

#Q:11-> write a function to print length&all elements of list in a single line
# def check(lists,itr):
#     if(itr>=len(lists)):return len(lists)
#     print(lists[itr],end=" ")  
#     return check(lists,itr+1)

# lists=[]
# for i in range(0,3,1):
#     val=int(input("enter integer val: "))
#     lists.append(val)
# ans=check(lists,0)
# print()
# print("length of lists is : ",ans)

#Q:12-> write a program to print the factorial of a number.
# def check(num,val):
#     if(num<=0):return val
#     val*=num
#     return check(num-1,val)
# num=int(input("enter a number: "))
# ans=check(num,1)
# print("factorial of ",num ,"is: ",ans)

#❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️FILE INPUT AND OUTPUT❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
# f=open("file.txt","a")            # as a good programmer, we must close the file.
# print(f.read())        # if opened with char(r): for partial read -> f.read(n) , n=number of characters to read
# print(f.readline())    #read line by line-1
# print(f.readline())    #read line by line-2 ........
# if(file opened with char "w")->we can overwrite(replace whole file content by the write line written below.)
# f.write("\nhello i am a good boy.")
# # if(file opened with char "a")->we can append(add to the end of  file by the write line written below.)
# f.write("\n that is very nice also.")
# f.close()              # always close the file after operation is done.

# with open("sample.txt","r") as f:       # if file opened by keyword(with), it will automatically close.
#     print(f.read())
    
# import os
# os.remove("sample.txt")                 # removes the file from system


#Q:13-> (I)create practice.txt and (II) add some data(by user) and (III)replace java by python and (IV)check if python exists,print line no.
# f=open("practice.txt","w")                                    #file opened(I)

# def enterlines(n):
#     if(n<1):return 
#     data=input(f"{n-1} remaining, enter your Statement: ")
#     f.write(data+"\n")                                        #data entered(II)
#     enterlines(n-1)

# n=int(input("enter no. of lines: "))
# enterlines(n)                                                 #fncn called to enter the data(II)

# def exchange():
#     f=open("practice.txt","r")
#     data=f.read()
#     newdata=data.replace("java","Python")
#     f=open("practice.txt","w")
#     f.write(newdata)                                            #java replaced by python(III)
#     f=open("practice.txt","r")
#     print(f.read())
# exchange()
    
# def check():
#     myword=input("enter word to be checked: ")                    #my word checked(IV)
#     curr=True
#     line=1
#     f=open("practice.txt","r")
#     while curr:
#         curr=f.readline()
#         if(curr.find(myword)!=-1):print(myword,"found at line: ",line)   #or can also write if(myword in data):...xyz
#         break
#         line+=1
# check()

#Q:14-> count even numbers, separated by commas.
# f=open("number.txt","w")
# f.write("5,2,5,4,7,8,2")
# f.close()
# def check():
#     f=open("number.txt","r")
#     content=f.read()
#     f.close()
#     numbs=content.split(",")
#     count=0
#     for num in numbs:
#         if int(num)%2==0:count+=1
#     return count
# ans=check()
# print("even numbers: ",ans)

#❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️OOPS❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
