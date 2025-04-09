# Task-9 Working with Remote Repositories and Collaboration

## Objective

- Simulate a collaborative workflow with remote repositories.

## Requirement

- Create a local repository and push it to a remote service (e.g., GitHub or GitLab).
- Create a feature branch, make commits, and push the branch to the remote.
- Open a Pull Request (or Merge Request) and perform a code review process.
- Merge the feature branch into the main branch on the remote and then pull the changes locally.

## Codes used in this task

```sh
git init
git remote add origin <repo-name>
git add .
git commit -m "Message"
```

![Initial](images/master-commit.png)

### To Check the remote connection

```sh
git remote -v
```

![Remote](images/remote.png)

```sh
git checkout -b branchName
```

![Second-Commit](images/second-branch.png)

![Second-commit](images/second-commit.png)

### Create a Pull Request

![Step1](images/pull-request.png)

![Step2](images/pull-step-1.png)

![Step3](images/pull-step-2.png)

### Merge the branches

![Merge](images/merged.png)

### Pull the content

![Pull](images/pulled-content.png)