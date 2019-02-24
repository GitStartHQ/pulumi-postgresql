# Contributing to Pulumi PostgreSQL provider

## Committing Generated Code

Code generated for SDKs should be checked in as part of the pull request containing a
particular change. To generate code after making changes, run `make` from the root of this
repository.

If a large number of seemingly-unrelated diffs are produced by `make` (for example, lots of changes
to comments unrelated to the change you are making), ensure that the latest dependencies for the
provider are installed by running `make ensure` in the root of the repository.

## Running Integration Tests

The examples and integration tests in this repository will create and destroy real resources while running.
