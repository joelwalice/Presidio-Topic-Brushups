# Task - 4 

## Objective

- Create a scenario that produces a merge conflict and resolve it.

## Requirement

- Create two branches from the same commit.
- Modify the same line(s) of code in a common file in both branches.
- Attempt to merge the branches, observe the conflict, and resolve it manually.
- Use `git status` and `git diff` to identify and resolve the conflicting changes.

## Commands

```sh 
git branch
```
![branch](images/branch.png)

```sh
git checkout <branch-name>
```
![switch](images/switch.png)

- Add the File in the master branch

![master Image](images/master_image.png)

- Add the File in the second-branch

![second-branch Image](images/second-branch_image.png)

```sh
git merge <destination>
```

![merge](images/merge.png)

![merge-conflict](images/merge-conflict.png)

- Manual Conflict fixing

![manual](images/Manual.png)

```sh
git status
```

![status](images/status.png)