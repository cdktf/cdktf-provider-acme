# `dataAcmeServerUrl` Submodule <a name="`dataAcmeServerUrl` Submodule" id="@cdktf/provider-acme.dataAcmeServerUrl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAcmeServerUrl <a name="DataAcmeServerUrl" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl"></a>

Represents a {@link https://registry.terraform.io/providers/vancluever/acme/2.32.0/docs/data-sources/server_url acme_server_url}.

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.Initializer"></a>

```typescript
import { dataAcmeServerUrl } from '@cdktf/provider-acme'

new dataAcmeServerUrl.DataAcmeServerUrl(scope: Construct, id: string, config?: DataAcmeServerUrlConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrlConfig">DataAcmeServerUrlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrlConfig">DataAcmeServerUrlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAcmeServerUrl resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.isConstruct"></a>

```typescript
import { dataAcmeServerUrl } from '@cdktf/provider-acme'

dataAcmeServerUrl.DataAcmeServerUrl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.isTerraformElement"></a>

```typescript
import { dataAcmeServerUrl } from '@cdktf/provider-acme'

dataAcmeServerUrl.DataAcmeServerUrl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.isTerraformDataSource"></a>

```typescript
import { dataAcmeServerUrl } from '@cdktf/provider-acme'

dataAcmeServerUrl.DataAcmeServerUrl.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.generateConfigForImport"></a>

```typescript
import { dataAcmeServerUrl } from '@cdktf/provider-acme'

dataAcmeServerUrl.DataAcmeServerUrl.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAcmeServerUrl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAcmeServerUrl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAcmeServerUrl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vancluever/acme/2.32.0/docs/data-sources/server_url#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAcmeServerUrl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.serverUrl">serverUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `serverUrl`<sup>Required</sup> <a name="serverUrl" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.serverUrl"></a>

```typescript
public readonly serverUrl: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAcmeServerUrlConfig <a name="DataAcmeServerUrlConfig" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrlConfig.Initializer"></a>

```typescript
import { dataAcmeServerUrl } from '@cdktf/provider-acme'

const dataAcmeServerUrlConfig: dataAcmeServerUrl.DataAcmeServerUrlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrlConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrlConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrlConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrlConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrlConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrlConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.32.0/docs/data-sources/server_url#id DataAcmeServerUrl#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrlConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-acme.dataAcmeServerUrl.DataAcmeServerUrlConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.32.0/docs/data-sources/server_url#id DataAcmeServerUrl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



