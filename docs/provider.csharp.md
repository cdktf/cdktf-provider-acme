# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-acme.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AcmeProvider <a name="AcmeProvider" id="@cdktf/provider-acme.provider.AcmeProvider"></a>

Represents a {@link https://registry.terraform.io/providers/vancluever/acme/2.32.0/docs acme}.

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.provider.AcmeProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

new AcmeProvider(Construct Scope, string Id, AcmeProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-acme.provider.AcmeProviderConfig">AcmeProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-acme.provider.AcmeProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-acme.provider.AcmeProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-acme.provider.AcmeProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-acme.provider.AcmeProviderConfig">AcmeProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProvider.resetAlias">ResetAlias</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-acme.provider.AcmeProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-acme.provider.AcmeProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-acme.provider.AcmeProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-acme.provider.AcmeProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-acme.provider.AcmeProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-acme.provider.AcmeProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-acme.provider.AcmeProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-acme.provider.AcmeProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-acme.provider.AcmeProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-acme.provider.AcmeProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-acme.provider.AcmeProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AcmeProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-acme.provider.AcmeProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

AcmeProvider.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-acme.provider.AcmeProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-acme.provider.AcmeProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

AcmeProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-acme.provider.AcmeProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-acme.provider.AcmeProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

AcmeProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-acme.provider.AcmeProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-acme.provider.AcmeProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

AcmeProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AcmeProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-acme.provider.AcmeProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-acme.provider.AcmeProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AcmeProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-acme.provider.AcmeProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AcmeProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vancluever/acme/2.32.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-acme.provider.AcmeProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AcmeProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProvider.property.serverUrlInput">ServerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProvider.property.serverUrl">ServerUrl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-acme.provider.AcmeProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-acme.provider.AcmeProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-acme.provider.AcmeProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-acme.provider.AcmeProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-acme.provider.AcmeProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-acme.provider.AcmeProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-acme.provider.AcmeProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-acme.provider.AcmeProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-acme.provider.AcmeProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-acme.provider.AcmeProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `ServerUrlInput`<sup>Optional</sup> <a name="ServerUrlInput" id="@cdktf/provider-acme.provider.AcmeProvider.property.serverUrlInput"></a>

```csharp
public string ServerUrlInput { get; }
```

- *Type:* string

---

##### `ServerUrl`<sup>Optional</sup> <a name="ServerUrl" id="@cdktf/provider-acme.provider.AcmeProvider.property.serverUrl"></a>

```csharp
public string ServerUrl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-acme.provider.AcmeProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AcmeProviderConfig <a name="AcmeProviderConfig" id="@cdktf/provider-acme.provider.AcmeProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.provider.AcmeProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

new AcmeProviderConfig {
    string ServerUrl,
    string Alias = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProviderConfig.property.serverUrl">ServerUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.32.0/docs#server_url AcmeProvider#server_url}. |
| <code><a href="#@cdktf/provider-acme.provider.AcmeProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |

---

##### `ServerUrl`<sup>Required</sup> <a name="ServerUrl" id="@cdktf/provider-acme.provider.AcmeProviderConfig.property.serverUrl"></a>

```csharp
public string ServerUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.32.0/docs#server_url AcmeProvider#server_url}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-acme.provider.AcmeProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.32.0/docs#alias AcmeProvider#alias}

---



