# Task-8 Using Git Hooks for Automated Checks

## Objective

- Set up a Git hook to run scripts (like linters or tests) before commits are finalized.

## Requirement

- Create a `pre-commit` hook in the `.git/hooks` directory.
- Write a simple script (e.g., a shell script or Node script) that runs a linter or a unit test.
- Ensure that if the tests or linting fail, the commit is aborted.
- Document how Git hooks can improve code quality in collaborative projects.

## Codes used in the task

```sh
git add .
git commit -m <commit-message>
```

![Initial Image](images/initial.png)

### Pre-commit code

![Pre-commit](images/pre-commit.png)

### If the pre-commit needs to be executed

```sh
chmod u+x .git/hooks/pre-commit
```

### If the file is commited with empty content

![Pre-commit-error](images/pre-commit-error.png)



### After content in the file

![after-content](images/after-content.png)

![pre-commit-success](images/test-result.png)



