
# CDKTF prebuilt bindings for vancluever/acme provider version 2.35.0

This repo builds and publishes the [Terraform acme provider](https://registry.terraform.io/providers/vancluever/acme/2.35.0/docs) bindings for [CDK for Terraform](https://cdk.tf).

## Available Packages

### NPM

The npm package is available at [https://www.npmjs.com/package/@cdktf/provider-acme](https://www.npmjs.com/package/@cdktf/provider-acme).

`npm install @cdktf/provider-acme`

### PyPI

The PyPI package is available at [https://pypi.org/project/cdktf-cdktf-provider-acme](https://pypi.org/project/cdktf-cdktf-provider-acme).

`pipenv install cdktf-cdktf-provider-acme`

### Nuget

The Nuget package is available at [https://www.nuget.org/packages/HashiCorp.Cdktf.Providers.Acme](https://www.nuget.org/packages/HashiCorp.Cdktf.Providers.Acme).

`dotnet add package HashiCorp.Cdktf.Providers.Acme`

### Maven

The Maven package is available at [https://mvnrepository.com/artifact/com.hashicorp/cdktf-provider-acme](https://mvnrepository.com/artifact/com.hashicorp/cdktf-provider-acme).

```
<dependency>
    <groupId>com.hashicorp</groupId>
    <artifactId>cdktf-provider-acme</artifactId>
    <version>[REPLACE WITH DESIRED VERSION]</version>
</dependency>
```

### Go

The go package is generated into the [`github.com/cdktf/cdktf-provider-acme-go`](https://github.com/cdktf/cdktf-provider-acme-go) package.

`go get github.com/cdktf/cdktf-provider-acme-go/acme/<version>`

Where `<version>` is the version of the prebuilt provider you would like to use e.g. `v11`. The full module name can be found
within the [go.mod](https://github.com/cdktf/cdktf-provider-acme-go/blob/main/acme/go.mod#L1) file.

## Docs

Find auto-generated docs for this provider here: 

- [Typescript](./docs/API.typescript.md)
- [Python](./docs/API.python.md)
- [Java](./docs/API.java.md)
- [C#](./docs/API.csharp.md)
- [Go](./docs/API.go.md)

You can also visit a hosted version of the documentation on [constructs.dev](https://constructs.dev/packages/@cdktf/provider-acme).

## Versioning

This project is explicitly not tracking the Terraform acme provider version 1:1. In fact, it always tracks `latest` of `~> 2.10` with every release. If there are scenarios where you explicitly have to pin your provider version, you can do so by [generating the provider constructs manually](https://cdk.tf/imports).

These are the upstream dependencies:

- [CDK for Terraform](https://cdk.tf)
- [Terraform acme provider](https://registry.terraform.io/providers/vancluever/acme/2.35.0)
- [Terraform Engine](https://terraform.io)

If there are breaking changes (backward incompatible) in any of the above, the major version of this project will be bumped.

## Features / Issues / Bugs

Please report bugs and issues to the [CDK for Terraform](https://cdk.tf) project:

- [Create bug report](https://cdk.tf/bug)
- [Create feature request](https://cdk.tf/feature)

## Contributing

### Projen

This is mostly based on [Projen](https://github.com/projen/projen), which takes care of generating the entire repository.

### cdktf-provider-project based on Projen

There's a custom [project builder](https://github.com/cdktf/cdktf-provider-project) which encapsulate the common settings for all `cdktf` prebuilt providers.

### Provider Version

The provider version can be adjusted in [./.projenrc.js](./.projenrc.js).

### Repository Management

The repository is managed by [CDKTF Repository Manager](https://github.com/cdktf/cdktf-repository-manager/).
