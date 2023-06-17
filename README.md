# anime-api
 
- anime images api


---
## some of the git commands i learnred today:
- to stage the changes that are made
```  
    git add 
```
- to config the origin and upstream
```
    git remote add <origin/upstream>
```
- to commit the changes made
```
    git commit -m "message"
```
- to push the changes to the github
```
    git push -u origin <branch>
```

 - to delete remote git branches
     
```
    git push origin -delete <branch name>
```
- to delete local git branches  (use -a tag  to verify)
```
    git branch --delete/-D <branch name>
```
- to list all the local and remote git branches (-r to only see the all remote branchs)
``` 
    git branch -a 
```
- to merge a local git branch in masters
```
    git merge <branch name>
```
- fetches and merges the master branch from a repo locally
 ```
    git pull
```
- to initialize the git in a project
 ```
    git init
```
- to uninitialize git from a local project 
 ```
    rm -rf .git 
```
- squash pivk and rebse command (-i tag is for interactiv mode)
```
    git rebase -i <commit token id>
```