# `acme_certificate`

Refer to the Terraform Registory for docs: [`acme_certificate`](https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate).

# `certificate` Submodule <a name="`certificate` Submodule" id="@cdktf/provider-acme.certificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Certificate <a name="Certificate" id="@cdktf/provider-acme.certificate.Certificate"></a>

Represents a {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate acme_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.Certificate.Initializer"></a>

```typescript
import { certificate } from '@cdktf/provider-acme'

new certificate.Certificate(scope: Construct, id: string, config: CertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig">CertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateConfig">CertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.putDnsChallenge">putDnsChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.putHttpChallenge">putHttpChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.putHttpMemcachedChallenge">putHttpMemcachedChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.putHttpWebrootChallenge">putHttpWebrootChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.putTlsChallenge">putTlsChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetCertificateP12Password">resetCertificateP12Password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetCertificateRequestPem">resetCertificateRequestPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetCommonName">resetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetDisableCompletePropagation">resetDisableCompletePropagation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetDnsChallenge">resetDnsChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetHttpChallenge">resetHttpChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetHttpMemcachedChallenge">resetHttpMemcachedChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetHttpWebrootChallenge">resetHttpWebrootChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetKeyType">resetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetMinDaysRemaining">resetMinDaysRemaining</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetMustStaple">resetMustStaple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetPreCheckDelay">resetPreCheckDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetPreferredChain">resetPreferredChain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetRecursiveNameservers">resetRecursiveNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetRevokeCertificateOnDestroy">resetRevokeCertificateOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetSubjectAlternativeNames">resetSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetTlsChallenge">resetTlsChallenge</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-acme.certificate.Certificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-acme.certificate.Certificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-acme.certificate.Certificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-acme.certificate.Certificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-acme.certificate.Certificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-acme.certificate.Certificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-acme.certificate.Certificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-acme.certificate.Certificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-acme.certificate.Certificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-acme.certificate.Certificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-acme.certificate.Certificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-acme.certificate.Certificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-acme.certificate.Certificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-acme.certificate.Certificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-acme.certificate.Certificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-acme.certificate.Certificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-acme.certificate.Certificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-acme.certificate.Certificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-acme.certificate.Certificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDnsChallenge` <a name="putDnsChallenge" id="@cdktf/provider-acme.certificate.Certificate.putDnsChallenge"></a>

```typescript
public putDnsChallenge(value: IResolvable | CertificateDnsChallenge[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-acme.certificate.Certificate.putDnsChallenge.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a>[]

---

##### `putHttpChallenge` <a name="putHttpChallenge" id="@cdktf/provider-acme.certificate.Certificate.putHttpChallenge"></a>

```typescript
public putHttpChallenge(value: CertificateHttpChallenge): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-acme.certificate.Certificate.putHttpChallenge.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a>

---

##### `putHttpMemcachedChallenge` <a name="putHttpMemcachedChallenge" id="@cdktf/provider-acme.certificate.Certificate.putHttpMemcachedChallenge"></a>

```typescript
public putHttpMemcachedChallenge(value: CertificateHttpMemcachedChallenge): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-acme.certificate.Certificate.putHttpMemcachedChallenge.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a>

---

##### `putHttpWebrootChallenge` <a name="putHttpWebrootChallenge" id="@cdktf/provider-acme.certificate.Certificate.putHttpWebrootChallenge"></a>

```typescript
public putHttpWebrootChallenge(value: CertificateHttpWebrootChallenge): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-acme.certificate.Certificate.putHttpWebrootChallenge.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a>

---

##### `putTlsChallenge` <a name="putTlsChallenge" id="@cdktf/provider-acme.certificate.Certificate.putTlsChallenge"></a>

```typescript
public putTlsChallenge(value: CertificateTlsChallenge): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-acme.certificate.Certificate.putTlsChallenge.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a>

---

##### `resetCertificateP12Password` <a name="resetCertificateP12Password" id="@cdktf/provider-acme.certificate.Certificate.resetCertificateP12Password"></a>

```typescript
public resetCertificateP12Password(): void
```

##### `resetCertificateRequestPem` <a name="resetCertificateRequestPem" id="@cdktf/provider-acme.certificate.Certificate.resetCertificateRequestPem"></a>

```typescript
public resetCertificateRequestPem(): void
```

##### `resetCommonName` <a name="resetCommonName" id="@cdktf/provider-acme.certificate.Certificate.resetCommonName"></a>

```typescript
public resetCommonName(): void
```

##### `resetDisableCompletePropagation` <a name="resetDisableCompletePropagation" id="@cdktf/provider-acme.certificate.Certificate.resetDisableCompletePropagation"></a>

```typescript
public resetDisableCompletePropagation(): void
```

##### `resetDnsChallenge` <a name="resetDnsChallenge" id="@cdktf/provider-acme.certificate.Certificate.resetDnsChallenge"></a>

```typescript
public resetDnsChallenge(): void
```

##### `resetHttpChallenge` <a name="resetHttpChallenge" id="@cdktf/provider-acme.certificate.Certificate.resetHttpChallenge"></a>

```typescript
public resetHttpChallenge(): void
```

##### `resetHttpMemcachedChallenge` <a name="resetHttpMemcachedChallenge" id="@cdktf/provider-acme.certificate.Certificate.resetHttpMemcachedChallenge"></a>

```typescript
public resetHttpMemcachedChallenge(): void
```

##### `resetHttpWebrootChallenge` <a name="resetHttpWebrootChallenge" id="@cdktf/provider-acme.certificate.Certificate.resetHttpWebrootChallenge"></a>

```typescript
public resetHttpWebrootChallenge(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-acme.certificate.Certificate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyType` <a name="resetKeyType" id="@cdktf/provider-acme.certificate.Certificate.resetKeyType"></a>

```typescript
public resetKeyType(): void
```

##### `resetMinDaysRemaining` <a name="resetMinDaysRemaining" id="@cdktf/provider-acme.certificate.Certificate.resetMinDaysRemaining"></a>

```typescript
public resetMinDaysRemaining(): void
```

##### `resetMustStaple` <a name="resetMustStaple" id="@cdktf/provider-acme.certificate.Certificate.resetMustStaple"></a>

```typescript
public resetMustStaple(): void
```

##### `resetPreCheckDelay` <a name="resetPreCheckDelay" id="@cdktf/provider-acme.certificate.Certificate.resetPreCheckDelay"></a>

```typescript
public resetPreCheckDelay(): void
```

##### `resetPreferredChain` <a name="resetPreferredChain" id="@cdktf/provider-acme.certificate.Certificate.resetPreferredChain"></a>

```typescript
public resetPreferredChain(): void
```

##### `resetRecursiveNameservers` <a name="resetRecursiveNameservers" id="@cdktf/provider-acme.certificate.Certificate.resetRecursiveNameservers"></a>

```typescript
public resetRecursiveNameservers(): void
```

##### `resetRevokeCertificateOnDestroy` <a name="resetRevokeCertificateOnDestroy" id="@cdktf/provider-acme.certificate.Certificate.resetRevokeCertificateOnDestroy"></a>

```typescript
public resetRevokeCertificateOnDestroy(): void
```

##### `resetSubjectAlternativeNames` <a name="resetSubjectAlternativeNames" id="@cdktf/provider-acme.certificate.Certificate.resetSubjectAlternativeNames"></a>

```typescript
public resetSubjectAlternativeNames(): void
```

##### `resetTlsChallenge` <a name="resetTlsChallenge" id="@cdktf/provider-acme.certificate.Certificate.resetTlsChallenge"></a>

```typescript
public resetTlsChallenge(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-acme.certificate.Certificate.isConstruct"></a>

```typescript
import { certificate } from '@cdktf/provider-acme'

certificate.Certificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-acme.certificate.Certificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-acme.certificate.Certificate.isTerraformElement"></a>

```typescript
import { certificate } from '@cdktf/provider-acme'

certificate.Certificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-acme.certificate.Certificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-acme.certificate.Certificate.isTerraformResource"></a>

```typescript
import { certificate } from '@cdktf/provider-acme'

certificate.Certificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-acme.certificate.Certificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateDomain">certificateDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateNotAfter">certificateNotAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateP12">certificateP12</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificatePem">certificatePem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateUrl">certificateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.dnsChallenge">dnsChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList">CertificateDnsChallengeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpChallenge">httpChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference">CertificateHttpChallengeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpMemcachedChallenge">httpMemcachedChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference">CertificateHttpMemcachedChallengeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpWebrootChallenge">httpWebrootChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference">CertificateHttpWebrootChallengeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.issuerPem">issuerPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.privateKeyPem">privateKeyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.tlsChallenge">tlsChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference">CertificateTlsChallengeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.accountKeyPemInput">accountKeyPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateP12PasswordInput">certificateP12PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateRequestPemInput">certificateRequestPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.commonNameInput">commonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.disableCompletePropagationInput">disableCompletePropagationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.dnsChallengeInput">dnsChallengeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpChallengeInput">httpChallengeInput</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpMemcachedChallengeInput">httpMemcachedChallengeInput</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpWebrootChallengeInput">httpWebrootChallengeInput</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.keyTypeInput">keyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.minDaysRemainingInput">minDaysRemainingInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.mustStapleInput">mustStapleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.preCheckDelayInput">preCheckDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.preferredChainInput">preferredChainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.recursiveNameserversInput">recursiveNameserversInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.revokeCertificateOnDestroyInput">revokeCertificateOnDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.subjectAlternativeNamesInput">subjectAlternativeNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.tlsChallengeInput">tlsChallengeInput</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.accountKeyPem">accountKeyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateP12Password">certificateP12Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateRequestPem">certificateRequestPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.commonName">commonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.disableCompletePropagation">disableCompletePropagation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.minDaysRemaining">minDaysRemaining</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.mustStaple">mustStaple</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.preCheckDelay">preCheckDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.preferredChain">preferredChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.recursiveNameservers">recursiveNameservers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.revokeCertificateOnDestroy">revokeCertificateOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-acme.certificate.Certificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-acme.certificate.Certificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-acme.certificate.Certificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-acme.certificate.Certificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-acme.certificate.Certificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-acme.certificate.Certificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-acme.certificate.Certificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-acme.certificate.Certificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-acme.certificate.Certificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-acme.certificate.Certificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-acme.certificate.Certificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-acme.certificate.Certificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-acme.certificate.Certificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-acme.certificate.Certificate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificateDomain`<sup>Required</sup> <a name="certificateDomain" id="@cdktf/provider-acme.certificate.Certificate.property.certificateDomain"></a>

```typescript
public readonly certificateDomain: string;
```

- *Type:* string

---

##### `certificateNotAfter`<sup>Required</sup> <a name="certificateNotAfter" id="@cdktf/provider-acme.certificate.Certificate.property.certificateNotAfter"></a>

```typescript
public readonly certificateNotAfter: string;
```

- *Type:* string

---

##### `certificateP12`<sup>Required</sup> <a name="certificateP12" id="@cdktf/provider-acme.certificate.Certificate.property.certificateP12"></a>

```typescript
public readonly certificateP12: string;
```

- *Type:* string

---

##### `certificatePem`<sup>Required</sup> <a name="certificatePem" id="@cdktf/provider-acme.certificate.Certificate.property.certificatePem"></a>

```typescript
public readonly certificatePem: string;
```

- *Type:* string

---

##### `certificateUrl`<sup>Required</sup> <a name="certificateUrl" id="@cdktf/provider-acme.certificate.Certificate.property.certificateUrl"></a>

```typescript
public readonly certificateUrl: string;
```

- *Type:* string

---

##### `dnsChallenge`<sup>Required</sup> <a name="dnsChallenge" id="@cdktf/provider-acme.certificate.Certificate.property.dnsChallenge"></a>

```typescript
public readonly dnsChallenge: CertificateDnsChallengeList;
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList">CertificateDnsChallengeList</a>

---

##### `httpChallenge`<sup>Required</sup> <a name="httpChallenge" id="@cdktf/provider-acme.certificate.Certificate.property.httpChallenge"></a>

```typescript
public readonly httpChallenge: CertificateHttpChallengeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference">CertificateHttpChallengeOutputReference</a>

---

##### `httpMemcachedChallenge`<sup>Required</sup> <a name="httpMemcachedChallenge" id="@cdktf/provider-acme.certificate.Certificate.property.httpMemcachedChallenge"></a>

```typescript
public readonly httpMemcachedChallenge: CertificateHttpMemcachedChallengeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference">CertificateHttpMemcachedChallengeOutputReference</a>

---

##### `httpWebrootChallenge`<sup>Required</sup> <a name="httpWebrootChallenge" id="@cdktf/provider-acme.certificate.Certificate.property.httpWebrootChallenge"></a>

```typescript
public readonly httpWebrootChallenge: CertificateHttpWebrootChallengeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference">CertificateHttpWebrootChallengeOutputReference</a>

---

##### `issuerPem`<sup>Required</sup> <a name="issuerPem" id="@cdktf/provider-acme.certificate.Certificate.property.issuerPem"></a>

```typescript
public readonly issuerPem: string;
```

- *Type:* string

---

##### `privateKeyPem`<sup>Required</sup> <a name="privateKeyPem" id="@cdktf/provider-acme.certificate.Certificate.property.privateKeyPem"></a>

```typescript
public readonly privateKeyPem: string;
```

- *Type:* string

---

##### `tlsChallenge`<sup>Required</sup> <a name="tlsChallenge" id="@cdktf/provider-acme.certificate.Certificate.property.tlsChallenge"></a>

```typescript
public readonly tlsChallenge: CertificateTlsChallengeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference">CertificateTlsChallengeOutputReference</a>

---

##### `accountKeyPemInput`<sup>Optional</sup> <a name="accountKeyPemInput" id="@cdktf/provider-acme.certificate.Certificate.property.accountKeyPemInput"></a>

```typescript
public readonly accountKeyPemInput: string;
```

- *Type:* string

---

##### `certificateP12PasswordInput`<sup>Optional</sup> <a name="certificateP12PasswordInput" id="@cdktf/provider-acme.certificate.Certificate.property.certificateP12PasswordInput"></a>

```typescript
public readonly certificateP12PasswordInput: string;
```

- *Type:* string

---

##### `certificateRequestPemInput`<sup>Optional</sup> <a name="certificateRequestPemInput" id="@cdktf/provider-acme.certificate.Certificate.property.certificateRequestPemInput"></a>

```typescript
public readonly certificateRequestPemInput: string;
```

- *Type:* string

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-acme.certificate.Certificate.property.commonNameInput"></a>

```typescript
public readonly commonNameInput: string;
```

- *Type:* string

---

##### `disableCompletePropagationInput`<sup>Optional</sup> <a name="disableCompletePropagationInput" id="@cdktf/provider-acme.certificate.Certificate.property.disableCompletePropagationInput"></a>

```typescript
public readonly disableCompletePropagationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dnsChallengeInput`<sup>Optional</sup> <a name="dnsChallengeInput" id="@cdktf/provider-acme.certificate.Certificate.property.dnsChallengeInput"></a>

```typescript
public readonly dnsChallengeInput: IResolvable | CertificateDnsChallenge[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a>[]

---

##### `httpChallengeInput`<sup>Optional</sup> <a name="httpChallengeInput" id="@cdktf/provider-acme.certificate.Certificate.property.httpChallengeInput"></a>

```typescript
public readonly httpChallengeInput: CertificateHttpChallenge;
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a>

---

##### `httpMemcachedChallengeInput`<sup>Optional</sup> <a name="httpMemcachedChallengeInput" id="@cdktf/provider-acme.certificate.Certificate.property.httpMemcachedChallengeInput"></a>

```typescript
public readonly httpMemcachedChallengeInput: CertificateHttpMemcachedChallenge;
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a>

---

##### `httpWebrootChallengeInput`<sup>Optional</sup> <a name="httpWebrootChallengeInput" id="@cdktf/provider-acme.certificate.Certificate.property.httpWebrootChallengeInput"></a>

```typescript
public readonly httpWebrootChallengeInput: CertificateHttpWebrootChallenge;
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-acme.certificate.Certificate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktf/provider-acme.certificate.Certificate.property.keyTypeInput"></a>

```typescript
public readonly keyTypeInput: string;
```

- *Type:* string

---

##### `minDaysRemainingInput`<sup>Optional</sup> <a name="minDaysRemainingInput" id="@cdktf/provider-acme.certificate.Certificate.property.minDaysRemainingInput"></a>

```typescript
public readonly minDaysRemainingInput: number;
```

- *Type:* number

---

##### `mustStapleInput`<sup>Optional</sup> <a name="mustStapleInput" id="@cdktf/provider-acme.certificate.Certificate.property.mustStapleInput"></a>

```typescript
public readonly mustStapleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `preCheckDelayInput`<sup>Optional</sup> <a name="preCheckDelayInput" id="@cdktf/provider-acme.certificate.Certificate.property.preCheckDelayInput"></a>

```typescript
public readonly preCheckDelayInput: number;
```

- *Type:* number

---

##### `preferredChainInput`<sup>Optional</sup> <a name="preferredChainInput" id="@cdktf/provider-acme.certificate.Certificate.property.preferredChainInput"></a>

```typescript
public readonly preferredChainInput: string;
```

- *Type:* string

---

##### `recursiveNameserversInput`<sup>Optional</sup> <a name="recursiveNameserversInput" id="@cdktf/provider-acme.certificate.Certificate.property.recursiveNameserversInput"></a>

```typescript
public readonly recursiveNameserversInput: string[];
```

- *Type:* string[]

---

##### `revokeCertificateOnDestroyInput`<sup>Optional</sup> <a name="revokeCertificateOnDestroyInput" id="@cdktf/provider-acme.certificate.Certificate.property.revokeCertificateOnDestroyInput"></a>

```typescript
public readonly revokeCertificateOnDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subjectAlternativeNamesInput`<sup>Optional</sup> <a name="subjectAlternativeNamesInput" id="@cdktf/provider-acme.certificate.Certificate.property.subjectAlternativeNamesInput"></a>

```typescript
public readonly subjectAlternativeNamesInput: string[];
```

- *Type:* string[]

---

##### `tlsChallengeInput`<sup>Optional</sup> <a name="tlsChallengeInput" id="@cdktf/provider-acme.certificate.Certificate.property.tlsChallengeInput"></a>

```typescript
public readonly tlsChallengeInput: CertificateTlsChallenge;
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a>

---

##### `accountKeyPem`<sup>Required</sup> <a name="accountKeyPem" id="@cdktf/provider-acme.certificate.Certificate.property.accountKeyPem"></a>

```typescript
public readonly accountKeyPem: string;
```

- *Type:* string

---

##### `certificateP12Password`<sup>Required</sup> <a name="certificateP12Password" id="@cdktf/provider-acme.certificate.Certificate.property.certificateP12Password"></a>

```typescript
public readonly certificateP12Password: string;
```

- *Type:* string

---

##### `certificateRequestPem`<sup>Required</sup> <a name="certificateRequestPem" id="@cdktf/provider-acme.certificate.Certificate.property.certificateRequestPem"></a>

```typescript
public readonly certificateRequestPem: string;
```

- *Type:* string

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-acme.certificate.Certificate.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

---

##### `disableCompletePropagation`<sup>Required</sup> <a name="disableCompletePropagation" id="@cdktf/provider-acme.certificate.Certificate.property.disableCompletePropagation"></a>

```typescript
public readonly disableCompletePropagation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-acme.certificate.Certificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-acme.certificate.Certificate.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `minDaysRemaining`<sup>Required</sup> <a name="minDaysRemaining" id="@cdktf/provider-acme.certificate.Certificate.property.minDaysRemaining"></a>

```typescript
public readonly minDaysRemaining: number;
```

- *Type:* number

---

##### `mustStaple`<sup>Required</sup> <a name="mustStaple" id="@cdktf/provider-acme.certificate.Certificate.property.mustStaple"></a>

```typescript
public readonly mustStaple: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `preCheckDelay`<sup>Required</sup> <a name="preCheckDelay" id="@cdktf/provider-acme.certificate.Certificate.property.preCheckDelay"></a>

```typescript
public readonly preCheckDelay: number;
```

- *Type:* number

---

##### `preferredChain`<sup>Required</sup> <a name="preferredChain" id="@cdktf/provider-acme.certificate.Certificate.property.preferredChain"></a>

```typescript
public readonly preferredChain: string;
```

- *Type:* string

---

##### `recursiveNameservers`<sup>Required</sup> <a name="recursiveNameservers" id="@cdktf/provider-acme.certificate.Certificate.property.recursiveNameservers"></a>

```typescript
public readonly recursiveNameservers: string[];
```

- *Type:* string[]

---

##### `revokeCertificateOnDestroy`<sup>Required</sup> <a name="revokeCertificateOnDestroy" id="@cdktf/provider-acme.certificate.Certificate.property.revokeCertificateOnDestroy"></a>

```typescript
public readonly revokeCertificateOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subjectAlternativeNames`<sup>Required</sup> <a name="subjectAlternativeNames" id="@cdktf/provider-acme.certificate.Certificate.property.subjectAlternativeNames"></a>

```typescript
public readonly subjectAlternativeNames: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-acme.certificate.Certificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateConfig <a name="CertificateConfig" id="@cdktf/provider-acme.certificate.CertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.certificate.CertificateConfig.Initializer"></a>

```typescript
import { certificate } from '@cdktf/provider-acme'

const certificateConfig: certificate.CertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.accountKeyPem">accountKeyPem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#account_key_pem Certificate#account_key_pem}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.certificateP12Password">certificateP12Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#certificate_p12_password Certificate#certificate_p12_password}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.certificateRequestPem">certificateRequestPem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#certificate_request_pem Certificate#certificate_request_pem}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.commonName">commonName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#common_name Certificate#common_name}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.disableCompletePropagation">disableCompletePropagation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#disable_complete_propagation Certificate#disable_complete_propagation}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.dnsChallenge">dnsChallenge</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a>[]</code> | dns_challenge block. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.httpChallenge">httpChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a></code> | http_challenge block. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.httpMemcachedChallenge">httpMemcachedChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a></code> | http_memcached_challenge block. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.httpWebrootChallenge">httpWebrootChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a></code> | http_webroot_challenge block. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#id Certificate#id}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.keyType">keyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#key_type Certificate#key_type}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.minDaysRemaining">minDaysRemaining</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#min_days_remaining Certificate#min_days_remaining}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.mustStaple">mustStaple</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#must_staple Certificate#must_staple}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.preCheckDelay">preCheckDelay</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#pre_check_delay Certificate#pre_check_delay}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.preferredChain">preferredChain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#preferred_chain Certificate#preferred_chain}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.recursiveNameservers">recursiveNameservers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#recursive_nameservers Certificate#recursive_nameservers}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.revokeCertificateOnDestroy">revokeCertificateOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#revoke_certificate_on_destroy Certificate#revoke_certificate_on_destroy}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#subject_alternative_names Certificate#subject_alternative_names}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.tlsChallenge">tlsChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a></code> | tls_challenge block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-acme.certificate.CertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-acme.certificate.CertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-acme.certificate.CertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-acme.certificate.CertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-acme.certificate.CertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-acme.certificate.CertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-acme.certificate.CertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountKeyPem`<sup>Required</sup> <a name="accountKeyPem" id="@cdktf/provider-acme.certificate.CertificateConfig.property.accountKeyPem"></a>

```typescript
public readonly accountKeyPem: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#account_key_pem Certificate#account_key_pem}.

---

##### `certificateP12Password`<sup>Optional</sup> <a name="certificateP12Password" id="@cdktf/provider-acme.certificate.CertificateConfig.property.certificateP12Password"></a>

```typescript
public readonly certificateP12Password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#certificate_p12_password Certificate#certificate_p12_password}.

---

##### `certificateRequestPem`<sup>Optional</sup> <a name="certificateRequestPem" id="@cdktf/provider-acme.certificate.CertificateConfig.property.certificateRequestPem"></a>

```typescript
public readonly certificateRequestPem: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#certificate_request_pem Certificate#certificate_request_pem}.

---

##### `commonName`<sup>Optional</sup> <a name="commonName" id="@cdktf/provider-acme.certificate.CertificateConfig.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#common_name Certificate#common_name}.

---

##### `disableCompletePropagation`<sup>Optional</sup> <a name="disableCompletePropagation" id="@cdktf/provider-acme.certificate.CertificateConfig.property.disableCompletePropagation"></a>

```typescript
public readonly disableCompletePropagation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#disable_complete_propagation Certificate#disable_complete_propagation}.

---

##### `dnsChallenge`<sup>Optional</sup> <a name="dnsChallenge" id="@cdktf/provider-acme.certificate.CertificateConfig.property.dnsChallenge"></a>

```typescript
public readonly dnsChallenge: IResolvable | CertificateDnsChallenge[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a>[]

dns_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#dns_challenge Certificate#dns_challenge}

---

##### `httpChallenge`<sup>Optional</sup> <a name="httpChallenge" id="@cdktf/provider-acme.certificate.CertificateConfig.property.httpChallenge"></a>

```typescript
public readonly httpChallenge: CertificateHttpChallenge;
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a>

http_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#http_challenge Certificate#http_challenge}

---

##### `httpMemcachedChallenge`<sup>Optional</sup> <a name="httpMemcachedChallenge" id="@cdktf/provider-acme.certificate.CertificateConfig.property.httpMemcachedChallenge"></a>

```typescript
public readonly httpMemcachedChallenge: CertificateHttpMemcachedChallenge;
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a>

http_memcached_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#http_memcached_challenge Certificate#http_memcached_challenge}

---

##### `httpWebrootChallenge`<sup>Optional</sup> <a name="httpWebrootChallenge" id="@cdktf/provider-acme.certificate.CertificateConfig.property.httpWebrootChallenge"></a>

```typescript
public readonly httpWebrootChallenge: CertificateHttpWebrootChallenge;
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a>

http_webroot_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#http_webroot_challenge Certificate#http_webroot_challenge}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-acme.certificate.CertificateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#id Certificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktf/provider-acme.certificate.CertificateConfig.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#key_type Certificate#key_type}.

---

##### `minDaysRemaining`<sup>Optional</sup> <a name="minDaysRemaining" id="@cdktf/provider-acme.certificate.CertificateConfig.property.minDaysRemaining"></a>

```typescript
public readonly minDaysRemaining: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#min_days_remaining Certificate#min_days_remaining}.

---

##### `mustStaple`<sup>Optional</sup> <a name="mustStaple" id="@cdktf/provider-acme.certificate.CertificateConfig.property.mustStaple"></a>

```typescript
public readonly mustStaple: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#must_staple Certificate#must_staple}.

---

##### `preCheckDelay`<sup>Optional</sup> <a name="preCheckDelay" id="@cdktf/provider-acme.certificate.CertificateConfig.property.preCheckDelay"></a>

```typescript
public readonly preCheckDelay: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#pre_check_delay Certificate#pre_check_delay}.

---

##### `preferredChain`<sup>Optional</sup> <a name="preferredChain" id="@cdktf/provider-acme.certificate.CertificateConfig.property.preferredChain"></a>

```typescript
public readonly preferredChain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#preferred_chain Certificate#preferred_chain}.

---

##### `recursiveNameservers`<sup>Optional</sup> <a name="recursiveNameservers" id="@cdktf/provider-acme.certificate.CertificateConfig.property.recursiveNameservers"></a>

```typescript
public readonly recursiveNameservers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#recursive_nameservers Certificate#recursive_nameservers}.

---

##### `revokeCertificateOnDestroy`<sup>Optional</sup> <a name="revokeCertificateOnDestroy" id="@cdktf/provider-acme.certificate.CertificateConfig.property.revokeCertificateOnDestroy"></a>

```typescript
public readonly revokeCertificateOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#revoke_certificate_on_destroy Certificate#revoke_certificate_on_destroy}.

---

##### `subjectAlternativeNames`<sup>Optional</sup> <a name="subjectAlternativeNames" id="@cdktf/provider-acme.certificate.CertificateConfig.property.subjectAlternativeNames"></a>

```typescript
public readonly subjectAlternativeNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#subject_alternative_names Certificate#subject_alternative_names}.

---

##### `tlsChallenge`<sup>Optional</sup> <a name="tlsChallenge" id="@cdktf/provider-acme.certificate.CertificateConfig.property.tlsChallenge"></a>

```typescript
public readonly tlsChallenge: CertificateTlsChallenge;
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a>

tls_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#tls_challenge Certificate#tls_challenge}

---

### CertificateDnsChallenge <a name="CertificateDnsChallenge" id="@cdktf/provider-acme.certificate.CertificateDnsChallenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.certificate.CertificateDnsChallenge.Initializer"></a>

```typescript
import { certificate } from '@cdktf/provider-acme'

const certificateDnsChallenge: certificate.CertificateDnsChallenge = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge.property.provider">provider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#provider Certificate#provider}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge.property.config">config</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#config Certificate#config}. |

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-acme.certificate.CertificateDnsChallenge.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#provider Certificate#provider}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-acme.certificate.CertificateDnsChallenge.property.config"></a>

```typescript
public readonly config: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#config Certificate#config}.

---

### CertificateHttpChallenge <a name="CertificateHttpChallenge" id="@cdktf/provider-acme.certificate.CertificateHttpChallenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.certificate.CertificateHttpChallenge.Initializer"></a>

```typescript
import { certificate } from '@cdktf/provider-acme'

const certificateHttpChallenge: certificate.CertificateHttpChallenge = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#port Certificate#port}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#proxy_header Certificate#proxy_header}. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-acme.certificate.CertificateHttpChallenge.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#port Certificate#port}.

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktf/provider-acme.certificate.CertificateHttpChallenge.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#proxy_header Certificate#proxy_header}.

---

### CertificateHttpMemcachedChallenge <a name="CertificateHttpMemcachedChallenge" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge.Initializer"></a>

```typescript
import { certificate } from '@cdktf/provider-acme'

const certificateHttpMemcachedChallenge: certificate.CertificateHttpMemcachedChallenge = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge.property.hosts">hosts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#hosts Certificate#hosts}. |

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#hosts Certificate#hosts}.

---

### CertificateHttpWebrootChallenge <a name="CertificateHttpWebrootChallenge" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge.Initializer"></a>

```typescript
import { certificate } from '@cdktf/provider-acme'

const certificateHttpWebrootChallenge: certificate.CertificateHttpWebrootChallenge = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge.property.directory">directory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#directory Certificate#directory}. |

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#directory Certificate#directory}.

---

### CertificateTlsChallenge <a name="CertificateTlsChallenge" id="@cdktf/provider-acme.certificate.CertificateTlsChallenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.certificate.CertificateTlsChallenge.Initializer"></a>

```typescript
import { certificate } from '@cdktf/provider-acme'

const certificateTlsChallenge: certificate.CertificateTlsChallenge = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#port Certificate#port}. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-acme.certificate.CertificateTlsChallenge.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.15.1/docs/resources/certificate#port Certificate#port}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificateDnsChallengeList <a name="CertificateDnsChallengeList" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.Initializer"></a>

```typescript
import { certificate } from '@cdktf/provider-acme'

new certificate.CertificateDnsChallengeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.get"></a>

```typescript
public get(index: number): CertificateDnsChallengeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificateDnsChallenge[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a>[]

---


### CertificateDnsChallengeOutputReference <a name="CertificateDnsChallengeOutputReference" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer"></a>

```typescript
import { certificate } from '@cdktf/provider-acme'

new certificate.CertificateDnsChallengeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.resetConfig">resetConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.resetConfig"></a>

```typescript
public resetConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.configInput">configInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.providerInput">providerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.config">config</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.configInput"></a>

```typescript
public readonly configInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.providerInput"></a>

```typescript
public readonly providerInput: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.config"></a>

```typescript
public readonly config: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificateDnsChallenge;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a>

---


### CertificateHttpChallengeOutputReference <a name="CertificateHttpChallengeOutputReference" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.Initializer"></a>

```typescript
import { certificate } from '@cdktf/provider-acme'

new certificate.CertificateHttpChallengeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.resetProxyHeader">resetProxyHeader</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.resetProxyHeader"></a>

```typescript
public resetProxyHeader(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.proxyHeaderInput"></a>

```typescript
public readonly proxyHeaderInput: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CertificateHttpChallenge;
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a>

---


### CertificateHttpMemcachedChallengeOutputReference <a name="CertificateHttpMemcachedChallengeOutputReference" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.Initializer"></a>

```typescript
import { certificate } from '@cdktf/provider-acme'

new certificate.CertificateHttpMemcachedChallengeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.hostsInput">hostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.hosts">hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.hostsInput"></a>

```typescript
public readonly hostsInput: string[];
```

- *Type:* string[]

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CertificateHttpMemcachedChallenge;
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a>

---


### CertificateHttpWebrootChallengeOutputReference <a name="CertificateHttpWebrootChallengeOutputReference" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.Initializer"></a>

```typescript
import { certificate } from '@cdktf/provider-acme'

new certificate.CertificateHttpWebrootChallengeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.directoryInput">directoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.directory">directory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.directoryInput"></a>

```typescript
public readonly directoryInput: string;
```

- *Type:* string

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CertificateHttpWebrootChallenge;
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a>

---


### CertificateTlsChallengeOutputReference <a name="CertificateTlsChallengeOutputReference" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.Initializer"></a>

```typescript
import { certificate } from '@cdktf/provider-acme'

new certificate.CertificateTlsChallengeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CertificateTlsChallenge;
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a>

---



