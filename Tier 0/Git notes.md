git --version

clear

**Git setup**

$ git config --global user.name "name"

$ git config --global user.email"name@site.com"

**List out attributes**

$git config --list

$git config --user.email

$git help

$git help commit

**Present working directory**

$ pwd


**Go back one directory**

$ cd ..


**List files**

$ ls


**List hidden files**

$ ls -la


**Initialize git project from folder** >  dive into folder using cd foldername


$ git init


**Commit**


  working copy > staging area > repository
  
  
$ git add .


$ git add name of file


$ git commit -m "message"


**Journal of all commits**


$ git log


$ git log --author="name"


**Status of files you are working on that git is keeping track of**


$ git status


**Remote repositories**


Create an empty Github repository. To push the local repo to the Github server we need to add a remote repository. This command takes a remote name & a repository URL


$ git remote add origin URL


**Pushing remotely**


Push local changes to origin repo from local branch master. The -u tells git to remember the parameters so that next time we can directly run git push.


$ git push -u origin master


**Pulling remotely**


Useful if some other people have made commits and pushed changes


$ git pull origin master


**Difference**


Identify changes from the most recent commits


$ git diff HEAD


$ git diff --staged
