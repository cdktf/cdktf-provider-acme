# `registration` Submodule <a name="`registration` Submodule" id="@cdktf/provider-acme.registration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Registration <a name="Registration" id="@cdktf/provider-acme.registration.Registration"></a>

Represents a {@link https://registry.terraform.io/providers/vancluever/acme/2.21.0/docs/resources/registration acme_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.registration.Registration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

new Registration(Construct Scope, string Id, RegistrationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.registration.Registration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-acme.registration.Registration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-acme.registration.Registration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-acme.registration.RegistrationConfig">RegistrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-acme.registration.Registration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-acme.registration.Registration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-acme.registration.Registration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-acme.registration.RegistrationConfig">RegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.registration.Registration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-acme.registration.Registration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-acme.registration.Registration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-acme.registration.Registration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-acme.registration.Registration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-acme.registration.Registration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-acme.registration.Registration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-acme.registration.Registration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-acme.registration.Registration.putExternalAccountBinding">PutExternalAccountBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.resetExternalAccountBinding">ResetExternalAccountBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-acme.registration.Registration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-acme.registration.Registration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-acme.registration.Registration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-acme.registration.Registration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-acme.registration.Registration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-acme.registration.Registration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-acme.registration.Registration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-acme.registration.Registration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-acme.registration.Registration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-acme.registration.Registration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-acme.registration.Registration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-acme.registration.Registration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-acme.registration.Registration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.registration.Registration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-acme.registration.Registration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.registration.Registration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-acme.registration.Registration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.registration.Registration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-acme.registration.Registration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.registration.Registration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-acme.registration.Registration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.registration.Registration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-acme.registration.Registration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.registration.Registration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-acme.registration.Registration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.registration.Registration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-acme.registration.Registration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.registration.Registration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-acme.registration.Registration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.registration.Registration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-acme.registration.Registration.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-acme.registration.Registration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-acme.registration.Registration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-acme.registration.Registration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-acme.registration.Registration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.registration.Registration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-acme.registration.Registration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-acme.registration.Registration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-acme.registration.Registration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-acme.registration.Registration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-acme.registration.Registration.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-acme.registration.Registration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-acme.registration.Registration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExternalAccountBinding` <a name="PutExternalAccountBinding" id="@cdktf/provider-acme.registration.Registration.putExternalAccountBinding"></a>

```csharp
private void PutExternalAccountBinding(RegistrationExternalAccountBinding Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-acme.registration.Registration.putExternalAccountBinding.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBinding">RegistrationExternalAccountBinding</a>

---

##### `ResetExternalAccountBinding` <a name="ResetExternalAccountBinding" id="@cdktf/provider-acme.registration.Registration.resetExternalAccountBinding"></a>

```csharp
private void ResetExternalAccountBinding()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-acme.registration.Registration.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.registration.Registration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-acme.registration.Registration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Registration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-acme.registration.Registration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

Registration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-acme.registration.Registration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-acme.registration.Registration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

Registration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-acme.registration.Registration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-acme.registration.Registration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

Registration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-acme.registration.Registration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-acme.registration.Registration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

Registration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Registration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-acme.registration.Registration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-acme.registration.Registration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Registration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-acme.registration.Registration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Registration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vancluever/acme/2.21.0/docs/resources/registration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-acme.registration.Registration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Registration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.registration.Registration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-acme.registration.Registration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.property.externalAccountBinding">ExternalAccountBinding</a></code> | <code><a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference">RegistrationExternalAccountBindingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.property.registrationUrl">RegistrationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.property.accountKeyPemInput">AccountKeyPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.property.emailAddressInput">EmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.property.externalAccountBindingInput">ExternalAccountBindingInput</a></code> | <code><a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBinding">RegistrationExternalAccountBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.property.accountKeyPem">AccountKeyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.Registration.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-acme.registration.Registration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-acme.registration.Registration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-acme.registration.Registration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-acme.registration.Registration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-acme.registration.Registration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-acme.registration.Registration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-acme.registration.Registration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-acme.registration.Registration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-acme.registration.Registration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-acme.registration.Registration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-acme.registration.Registration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-acme.registration.Registration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-acme.registration.Registration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-acme.registration.Registration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ExternalAccountBinding`<sup>Required</sup> <a name="ExternalAccountBinding" id="@cdktf/provider-acme.registration.Registration.property.externalAccountBinding"></a>

```csharp
public RegistrationExternalAccountBindingOutputReference ExternalAccountBinding { get; }
```

- *Type:* <a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference">RegistrationExternalAccountBindingOutputReference</a>

---

##### `RegistrationUrl`<sup>Required</sup> <a name="RegistrationUrl" id="@cdktf/provider-acme.registration.Registration.property.registrationUrl"></a>

```csharp
public string RegistrationUrl { get; }
```

- *Type:* string

---

##### `AccountKeyPemInput`<sup>Optional</sup> <a name="AccountKeyPemInput" id="@cdktf/provider-acme.registration.Registration.property.accountKeyPemInput"></a>

```csharp
public string AccountKeyPemInput { get; }
```

- *Type:* string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktf/provider-acme.registration.Registration.property.emailAddressInput"></a>

```csharp
public string EmailAddressInput { get; }
```

- *Type:* string

---

##### `ExternalAccountBindingInput`<sup>Optional</sup> <a name="ExternalAccountBindingInput" id="@cdktf/provider-acme.registration.Registration.property.externalAccountBindingInput"></a>

```csharp
public RegistrationExternalAccountBinding ExternalAccountBindingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBinding">RegistrationExternalAccountBinding</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-acme.registration.Registration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AccountKeyPem`<sup>Required</sup> <a name="AccountKeyPem" id="@cdktf/provider-acme.registration.Registration.property.accountKeyPem"></a>

```csharp
public string AccountKeyPem { get; }
```

- *Type:* string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-acme.registration.Registration.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-acme.registration.Registration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.registration.Registration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-acme.registration.Registration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RegistrationConfig <a name="RegistrationConfig" id="@cdktf/provider-acme.registration.RegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.registration.RegistrationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

new RegistrationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountKeyPem,
    string EmailAddress,
    RegistrationExternalAccountBinding ExternalAccountBinding = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationConfig.property.accountKeyPem">AccountKeyPem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.21.0/docs/resources/registration#account_key_pem Registration#account_key_pem}. |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationConfig.property.emailAddress">EmailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.21.0/docs/resources/registration#email_address Registration#email_address}. |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationConfig.property.externalAccountBinding">ExternalAccountBinding</a></code> | <code><a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBinding">RegistrationExternalAccountBinding</a></code> | external_account_binding block. |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.21.0/docs/resources/registration#id Registration#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-acme.registration.RegistrationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-acme.registration.RegistrationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-acme.registration.RegistrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-acme.registration.RegistrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-acme.registration.RegistrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-acme.registration.RegistrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-acme.registration.RegistrationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountKeyPem`<sup>Required</sup> <a name="AccountKeyPem" id="@cdktf/provider-acme.registration.RegistrationConfig.property.accountKeyPem"></a>

```csharp
public string AccountKeyPem { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.21.0/docs/resources/registration#account_key_pem Registration#account_key_pem}.

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-acme.registration.RegistrationConfig.property.emailAddress"></a>

```csharp
public string EmailAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.21.0/docs/resources/registration#email_address Registration#email_address}.

---

##### `ExternalAccountBinding`<sup>Optional</sup> <a name="ExternalAccountBinding" id="@cdktf/provider-acme.registration.RegistrationConfig.property.externalAccountBinding"></a>

```csharp
public RegistrationExternalAccountBinding ExternalAccountBinding { get; set; }
```

- *Type:* <a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBinding">RegistrationExternalAccountBinding</a>

external_account_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.21.0/docs/resources/registration#external_account_binding Registration#external_account_binding}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-acme.registration.RegistrationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.21.0/docs/resources/registration#id Registration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### RegistrationExternalAccountBinding <a name="RegistrationExternalAccountBinding" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

new RegistrationExternalAccountBinding {
    string HmacBase64,
    string KeyId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBinding.property.hmacBase64">HmacBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.21.0/docs/resources/registration#hmac_base64 Registration#hmac_base64}. |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBinding.property.keyId">KeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.21.0/docs/resources/registration#key_id Registration#key_id}. |

---

##### `HmacBase64`<sup>Required</sup> <a name="HmacBase64" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBinding.property.hmacBase64"></a>

```csharp
public string HmacBase64 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.21.0/docs/resources/registration#hmac_base64 Registration#hmac_base64}.

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBinding.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.21.0/docs/resources/registration#key_id Registration#key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### RegistrationExternalAccountBindingOutputReference <a name="RegistrationExternalAccountBindingOutputReference" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

new RegistrationExternalAccountBindingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.property.hmacBase64Input">HmacBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.property.hmacBase64">HmacBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBinding">RegistrationExternalAccountBinding</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HmacBase64Input`<sup>Optional</sup> <a name="HmacBase64Input" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.property.hmacBase64Input"></a>

```csharp
public string HmacBase64Input { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `HmacBase64`<sup>Required</sup> <a name="HmacBase64" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.property.hmacBase64"></a>

```csharp
public string HmacBase64 { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-acme.registration.RegistrationExternalAccountBindingOutputReference.property.internalValue"></a>

```csharp
public RegistrationExternalAccountBinding InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-acme.registration.RegistrationExternalAccountBinding">RegistrationExternalAccountBinding</a>

---



