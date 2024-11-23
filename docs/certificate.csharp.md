# `certificate` Submodule <a name="`certificate` Submodule" id="@cdktf/provider-acme.certificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Certificate <a name="Certificate" id="@cdktf/provider-acme.certificate.Certificate"></a>

Represents a {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate acme_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.Certificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

new Certificate(Construct Scope, string Id, CertificateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig">CertificateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateConfig">CertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.putDnsChallenge">PutDnsChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.putHttpChallenge">PutHttpChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.putHttpMemcachedChallenge">PutHttpMemcachedChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.putHttpS3Challenge">PutHttpS3Challenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.putHttpWebrootChallenge">PutHttpWebrootChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.putTlsChallenge">PutTlsChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetCertificateP12Password">ResetCertificateP12Password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetCertificateRequestPem">ResetCertificateRequestPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetCertTimeout">ResetCertTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetCommonName">ResetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetDisableCompletePropagation">ResetDisableCompletePropagation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetDnsChallenge">ResetDnsChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetHttpChallenge">ResetHttpChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetHttpMemcachedChallenge">ResetHttpMemcachedChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetHttpS3Challenge">ResetHttpS3Challenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetHttpWebrootChallenge">ResetHttpWebrootChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetKeyType">ResetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetMinDaysRemaining">ResetMinDaysRemaining</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetMustStaple">ResetMustStaple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetPreCheckDelay">ResetPreCheckDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetPreferredChain">ResetPreferredChain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetRecursiveNameservers">ResetRecursiveNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetRevokeCertificateOnDestroy">ResetRevokeCertificateOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetRevokeCertificateReason">ResetRevokeCertificateReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetSubjectAlternativeNames">ResetSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetTlsChallenge">ResetTlsChallenge</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-acme.certificate.Certificate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-acme.certificate.Certificate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-acme.certificate.Certificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-acme.certificate.Certificate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-acme.certificate.Certificate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-acme.certificate.Certificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-acme.certificate.Certificate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-acme.certificate.Certificate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-acme.certificate.Certificate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-acme.certificate.Certificate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-acme.certificate.Certificate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-acme.certificate.Certificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-acme.certificate.Certificate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-acme.certificate.Certificate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-acme.certificate.Certificate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-acme.certificate.Certificate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-acme.certificate.Certificate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-acme.certificate.Certificate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-acme.certificate.Certificate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-acme.certificate.Certificate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-acme.certificate.Certificate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-acme.certificate.Certificate.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-acme.certificate.Certificate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-acme.certificate.Certificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-acme.certificate.Certificate.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-acme.certificate.Certificate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-acme.certificate.Certificate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-acme.certificate.Certificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-acme.certificate.Certificate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-acme.certificate.Certificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-acme.certificate.Certificate.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-acme.certificate.Certificate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-acme.certificate.Certificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDnsChallenge` <a name="PutDnsChallenge" id="@cdktf/provider-acme.certificate.Certificate.putDnsChallenge"></a>

```csharp
private void PutDnsChallenge(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-acme.certificate.Certificate.putDnsChallenge.parameter.value"></a>

- *Type:* object

---

##### `PutHttpChallenge` <a name="PutHttpChallenge" id="@cdktf/provider-acme.certificate.Certificate.putHttpChallenge"></a>

```csharp
private void PutHttpChallenge(CertificateHttpChallenge Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-acme.certificate.Certificate.putHttpChallenge.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a>

---

##### `PutHttpMemcachedChallenge` <a name="PutHttpMemcachedChallenge" id="@cdktf/provider-acme.certificate.Certificate.putHttpMemcachedChallenge"></a>

```csharp
private void PutHttpMemcachedChallenge(CertificateHttpMemcachedChallenge Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-acme.certificate.Certificate.putHttpMemcachedChallenge.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a>

---

##### `PutHttpS3Challenge` <a name="PutHttpS3Challenge" id="@cdktf/provider-acme.certificate.Certificate.putHttpS3Challenge"></a>

```csharp
private void PutHttpS3Challenge(CertificateHttpS3Challenge Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-acme.certificate.Certificate.putHttpS3Challenge.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpS3Challenge">CertificateHttpS3Challenge</a>

---

##### `PutHttpWebrootChallenge` <a name="PutHttpWebrootChallenge" id="@cdktf/provider-acme.certificate.Certificate.putHttpWebrootChallenge"></a>

```csharp
private void PutHttpWebrootChallenge(CertificateHttpWebrootChallenge Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-acme.certificate.Certificate.putHttpWebrootChallenge.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a>

---

##### `PutTlsChallenge` <a name="PutTlsChallenge" id="@cdktf/provider-acme.certificate.Certificate.putTlsChallenge"></a>

```csharp
private void PutTlsChallenge(CertificateTlsChallenge Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-acme.certificate.Certificate.putTlsChallenge.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a>

---

##### `ResetCertificateP12Password` <a name="ResetCertificateP12Password" id="@cdktf/provider-acme.certificate.Certificate.resetCertificateP12Password"></a>

```csharp
private void ResetCertificateP12Password()
```

##### `ResetCertificateRequestPem` <a name="ResetCertificateRequestPem" id="@cdktf/provider-acme.certificate.Certificate.resetCertificateRequestPem"></a>

```csharp
private void ResetCertificateRequestPem()
```

##### `ResetCertTimeout` <a name="ResetCertTimeout" id="@cdktf/provider-acme.certificate.Certificate.resetCertTimeout"></a>

```csharp
private void ResetCertTimeout()
```

##### `ResetCommonName` <a name="ResetCommonName" id="@cdktf/provider-acme.certificate.Certificate.resetCommonName"></a>

```csharp
private void ResetCommonName()
```

##### `ResetDisableCompletePropagation` <a name="ResetDisableCompletePropagation" id="@cdktf/provider-acme.certificate.Certificate.resetDisableCompletePropagation"></a>

```csharp
private void ResetDisableCompletePropagation()
```

##### `ResetDnsChallenge` <a name="ResetDnsChallenge" id="@cdktf/provider-acme.certificate.Certificate.resetDnsChallenge"></a>

```csharp
private void ResetDnsChallenge()
```

##### `ResetHttpChallenge` <a name="ResetHttpChallenge" id="@cdktf/provider-acme.certificate.Certificate.resetHttpChallenge"></a>

```csharp
private void ResetHttpChallenge()
```

##### `ResetHttpMemcachedChallenge` <a name="ResetHttpMemcachedChallenge" id="@cdktf/provider-acme.certificate.Certificate.resetHttpMemcachedChallenge"></a>

```csharp
private void ResetHttpMemcachedChallenge()
```

##### `ResetHttpS3Challenge` <a name="ResetHttpS3Challenge" id="@cdktf/provider-acme.certificate.Certificate.resetHttpS3Challenge"></a>

```csharp
private void ResetHttpS3Challenge()
```

##### `ResetHttpWebrootChallenge` <a name="ResetHttpWebrootChallenge" id="@cdktf/provider-acme.certificate.Certificate.resetHttpWebrootChallenge"></a>

```csharp
private void ResetHttpWebrootChallenge()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-acme.certificate.Certificate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeyType` <a name="ResetKeyType" id="@cdktf/provider-acme.certificate.Certificate.resetKeyType"></a>

```csharp
private void ResetKeyType()
```

##### `ResetMinDaysRemaining` <a name="ResetMinDaysRemaining" id="@cdktf/provider-acme.certificate.Certificate.resetMinDaysRemaining"></a>

```csharp
private void ResetMinDaysRemaining()
```

##### `ResetMustStaple` <a name="ResetMustStaple" id="@cdktf/provider-acme.certificate.Certificate.resetMustStaple"></a>

```csharp
private void ResetMustStaple()
```

##### `ResetPreCheckDelay` <a name="ResetPreCheckDelay" id="@cdktf/provider-acme.certificate.Certificate.resetPreCheckDelay"></a>

```csharp
private void ResetPreCheckDelay()
```

##### `ResetPreferredChain` <a name="ResetPreferredChain" id="@cdktf/provider-acme.certificate.Certificate.resetPreferredChain"></a>

```csharp
private void ResetPreferredChain()
```

##### `ResetRecursiveNameservers` <a name="ResetRecursiveNameservers" id="@cdktf/provider-acme.certificate.Certificate.resetRecursiveNameservers"></a>

```csharp
private void ResetRecursiveNameservers()
```

##### `ResetRevokeCertificateOnDestroy` <a name="ResetRevokeCertificateOnDestroy" id="@cdktf/provider-acme.certificate.Certificate.resetRevokeCertificateOnDestroy"></a>

```csharp
private void ResetRevokeCertificateOnDestroy()
```

##### `ResetRevokeCertificateReason` <a name="ResetRevokeCertificateReason" id="@cdktf/provider-acme.certificate.Certificate.resetRevokeCertificateReason"></a>

```csharp
private void ResetRevokeCertificateReason()
```

##### `ResetSubjectAlternativeNames` <a name="ResetSubjectAlternativeNames" id="@cdktf/provider-acme.certificate.Certificate.resetSubjectAlternativeNames"></a>

```csharp
private void ResetSubjectAlternativeNames()
```

##### `ResetTlsChallenge` <a name="ResetTlsChallenge" id="@cdktf/provider-acme.certificate.Certificate.resetTlsChallenge"></a>

```csharp
private void ResetTlsChallenge()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Certificate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-acme.certificate.Certificate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

Certificate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-acme.certificate.Certificate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-acme.certificate.Certificate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

Certificate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-acme.certificate.Certificate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-acme.certificate.Certificate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

Certificate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-acme.certificate.Certificate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-acme.certificate.Certificate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

Certificate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Certificate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-acme.certificate.Certificate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-acme.certificate.Certificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Certificate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-acme.certificate.Certificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Certificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-acme.certificate.Certificate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Certificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateDomain">CertificateDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateNotAfter">CertificateNotAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateP12">CertificateP12</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificatePem">CertificatePem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateSerial">CertificateSerial</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateUrl">CertificateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.dnsChallenge">DnsChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList">CertificateDnsChallengeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpChallenge">HttpChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference">CertificateHttpChallengeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpMemcachedChallenge">HttpMemcachedChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference">CertificateHttpMemcachedChallengeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpS3Challenge">HttpS3Challenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference">CertificateHttpS3ChallengeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpWebrootChallenge">HttpWebrootChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference">CertificateHttpWebrootChallengeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.issuerPem">IssuerPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.privateKeyPem">PrivateKeyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.tlsChallenge">TlsChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference">CertificateTlsChallengeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.accountKeyPemInput">AccountKeyPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateP12PasswordInput">CertificateP12PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateRequestPemInput">CertificateRequestPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certTimeoutInput">CertTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.commonNameInput">CommonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.disableCompletePropagationInput">DisableCompletePropagationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.dnsChallengeInput">DnsChallengeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpChallengeInput">HttpChallengeInput</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpMemcachedChallengeInput">HttpMemcachedChallengeInput</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpS3ChallengeInput">HttpS3ChallengeInput</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3Challenge">CertificateHttpS3Challenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpWebrootChallengeInput">HttpWebrootChallengeInput</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.keyTypeInput">KeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.minDaysRemainingInput">MinDaysRemainingInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.mustStapleInput">MustStapleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.preCheckDelayInput">PreCheckDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.preferredChainInput">PreferredChainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.recursiveNameserversInput">RecursiveNameserversInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.revokeCertificateOnDestroyInput">RevokeCertificateOnDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.revokeCertificateReasonInput">RevokeCertificateReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.subjectAlternativeNamesInput">SubjectAlternativeNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.tlsChallengeInput">TlsChallengeInput</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.accountKeyPem">AccountKeyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateP12Password">CertificateP12Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateRequestPem">CertificateRequestPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certTimeout">CertTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.commonName">CommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.disableCompletePropagation">DisableCompletePropagation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.keyType">KeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.minDaysRemaining">MinDaysRemaining</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.mustStaple">MustStaple</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.preCheckDelay">PreCheckDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.preferredChain">PreferredChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.recursiveNameservers">RecursiveNameservers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.revokeCertificateOnDestroy">RevokeCertificateOnDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.revokeCertificateReason">RevokeCertificateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-acme.certificate.Certificate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-acme.certificate.Certificate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-acme.certificate.Certificate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-acme.certificate.Certificate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-acme.certificate.Certificate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-acme.certificate.Certificate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-acme.certificate.Certificate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-acme.certificate.Certificate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-acme.certificate.Certificate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-acme.certificate.Certificate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-acme.certificate.Certificate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-acme.certificate.Certificate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-acme.certificate.Certificate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-acme.certificate.Certificate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CertificateDomain`<sup>Required</sup> <a name="CertificateDomain" id="@cdktf/provider-acme.certificate.Certificate.property.certificateDomain"></a>

```csharp
public string CertificateDomain { get; }
```

- *Type:* string

---

##### `CertificateNotAfter`<sup>Required</sup> <a name="CertificateNotAfter" id="@cdktf/provider-acme.certificate.Certificate.property.certificateNotAfter"></a>

```csharp
public string CertificateNotAfter { get; }
```

- *Type:* string

---

##### `CertificateP12`<sup>Required</sup> <a name="CertificateP12" id="@cdktf/provider-acme.certificate.Certificate.property.certificateP12"></a>

```csharp
public string CertificateP12 { get; }
```

- *Type:* string

---

##### `CertificatePem`<sup>Required</sup> <a name="CertificatePem" id="@cdktf/provider-acme.certificate.Certificate.property.certificatePem"></a>

```csharp
public string CertificatePem { get; }
```

- *Type:* string

---

##### `CertificateSerial`<sup>Required</sup> <a name="CertificateSerial" id="@cdktf/provider-acme.certificate.Certificate.property.certificateSerial"></a>

```csharp
public string CertificateSerial { get; }
```

- *Type:* string

---

##### `CertificateUrl`<sup>Required</sup> <a name="CertificateUrl" id="@cdktf/provider-acme.certificate.Certificate.property.certificateUrl"></a>

```csharp
public string CertificateUrl { get; }
```

- *Type:* string

---

##### `DnsChallenge`<sup>Required</sup> <a name="DnsChallenge" id="@cdktf/provider-acme.certificate.Certificate.property.dnsChallenge"></a>

```csharp
public CertificateDnsChallengeList DnsChallenge { get; }
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList">CertificateDnsChallengeList</a>

---

##### `HttpChallenge`<sup>Required</sup> <a name="HttpChallenge" id="@cdktf/provider-acme.certificate.Certificate.property.httpChallenge"></a>

```csharp
public CertificateHttpChallengeOutputReference HttpChallenge { get; }
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference">CertificateHttpChallengeOutputReference</a>

---

##### `HttpMemcachedChallenge`<sup>Required</sup> <a name="HttpMemcachedChallenge" id="@cdktf/provider-acme.certificate.Certificate.property.httpMemcachedChallenge"></a>

```csharp
public CertificateHttpMemcachedChallengeOutputReference HttpMemcachedChallenge { get; }
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference">CertificateHttpMemcachedChallengeOutputReference</a>

---

##### `HttpS3Challenge`<sup>Required</sup> <a name="HttpS3Challenge" id="@cdktf/provider-acme.certificate.Certificate.property.httpS3Challenge"></a>

```csharp
public CertificateHttpS3ChallengeOutputReference HttpS3Challenge { get; }
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference">CertificateHttpS3ChallengeOutputReference</a>

---

##### `HttpWebrootChallenge`<sup>Required</sup> <a name="HttpWebrootChallenge" id="@cdktf/provider-acme.certificate.Certificate.property.httpWebrootChallenge"></a>

```csharp
public CertificateHttpWebrootChallengeOutputReference HttpWebrootChallenge { get; }
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference">CertificateHttpWebrootChallengeOutputReference</a>

---

##### `IssuerPem`<sup>Required</sup> <a name="IssuerPem" id="@cdktf/provider-acme.certificate.Certificate.property.issuerPem"></a>

```csharp
public string IssuerPem { get; }
```

- *Type:* string

---

##### `PrivateKeyPem`<sup>Required</sup> <a name="PrivateKeyPem" id="@cdktf/provider-acme.certificate.Certificate.property.privateKeyPem"></a>

```csharp
public string PrivateKeyPem { get; }
```

- *Type:* string

---

##### `TlsChallenge`<sup>Required</sup> <a name="TlsChallenge" id="@cdktf/provider-acme.certificate.Certificate.property.tlsChallenge"></a>

```csharp
public CertificateTlsChallengeOutputReference TlsChallenge { get; }
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference">CertificateTlsChallengeOutputReference</a>

---

##### `AccountKeyPemInput`<sup>Optional</sup> <a name="AccountKeyPemInput" id="@cdktf/provider-acme.certificate.Certificate.property.accountKeyPemInput"></a>

```csharp
public string AccountKeyPemInput { get; }
```

- *Type:* string

---

##### `CertificateP12PasswordInput`<sup>Optional</sup> <a name="CertificateP12PasswordInput" id="@cdktf/provider-acme.certificate.Certificate.property.certificateP12PasswordInput"></a>

```csharp
public string CertificateP12PasswordInput { get; }
```

- *Type:* string

---

##### `CertificateRequestPemInput`<sup>Optional</sup> <a name="CertificateRequestPemInput" id="@cdktf/provider-acme.certificate.Certificate.property.certificateRequestPemInput"></a>

```csharp
public string CertificateRequestPemInput { get; }
```

- *Type:* string

---

##### `CertTimeoutInput`<sup>Optional</sup> <a name="CertTimeoutInput" id="@cdktf/provider-acme.certificate.Certificate.property.certTimeoutInput"></a>

```csharp
public double CertTimeoutInput { get; }
```

- *Type:* double

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktf/provider-acme.certificate.Certificate.property.commonNameInput"></a>

```csharp
public string CommonNameInput { get; }
```

- *Type:* string

---

##### `DisableCompletePropagationInput`<sup>Optional</sup> <a name="DisableCompletePropagationInput" id="@cdktf/provider-acme.certificate.Certificate.property.disableCompletePropagationInput"></a>

```csharp
public object DisableCompletePropagationInput { get; }
```

- *Type:* object

---

##### `DnsChallengeInput`<sup>Optional</sup> <a name="DnsChallengeInput" id="@cdktf/provider-acme.certificate.Certificate.property.dnsChallengeInput"></a>

```csharp
public object DnsChallengeInput { get; }
```

- *Type:* object

---

##### `HttpChallengeInput`<sup>Optional</sup> <a name="HttpChallengeInput" id="@cdktf/provider-acme.certificate.Certificate.property.httpChallengeInput"></a>

```csharp
public CertificateHttpChallenge HttpChallengeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a>

---

##### `HttpMemcachedChallengeInput`<sup>Optional</sup> <a name="HttpMemcachedChallengeInput" id="@cdktf/provider-acme.certificate.Certificate.property.httpMemcachedChallengeInput"></a>

```csharp
public CertificateHttpMemcachedChallenge HttpMemcachedChallengeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a>

---

##### `HttpS3ChallengeInput`<sup>Optional</sup> <a name="HttpS3ChallengeInput" id="@cdktf/provider-acme.certificate.Certificate.property.httpS3ChallengeInput"></a>

```csharp
public CertificateHttpS3Challenge HttpS3ChallengeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpS3Challenge">CertificateHttpS3Challenge</a>

---

##### `HttpWebrootChallengeInput`<sup>Optional</sup> <a name="HttpWebrootChallengeInput" id="@cdktf/provider-acme.certificate.Certificate.property.httpWebrootChallengeInput"></a>

```csharp
public CertificateHttpWebrootChallenge HttpWebrootChallengeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-acme.certificate.Certificate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktf/provider-acme.certificate.Certificate.property.keyTypeInput"></a>

```csharp
public string KeyTypeInput { get; }
```

- *Type:* string

---

##### `MinDaysRemainingInput`<sup>Optional</sup> <a name="MinDaysRemainingInput" id="@cdktf/provider-acme.certificate.Certificate.property.minDaysRemainingInput"></a>

```csharp
public double MinDaysRemainingInput { get; }
```

- *Type:* double

---

##### `MustStapleInput`<sup>Optional</sup> <a name="MustStapleInput" id="@cdktf/provider-acme.certificate.Certificate.property.mustStapleInput"></a>

```csharp
public object MustStapleInput { get; }
```

- *Type:* object

---

##### `PreCheckDelayInput`<sup>Optional</sup> <a name="PreCheckDelayInput" id="@cdktf/provider-acme.certificate.Certificate.property.preCheckDelayInput"></a>

```csharp
public double PreCheckDelayInput { get; }
```

- *Type:* double

---

##### `PreferredChainInput`<sup>Optional</sup> <a name="PreferredChainInput" id="@cdktf/provider-acme.certificate.Certificate.property.preferredChainInput"></a>

```csharp
public string PreferredChainInput { get; }
```

- *Type:* string

---

##### `RecursiveNameserversInput`<sup>Optional</sup> <a name="RecursiveNameserversInput" id="@cdktf/provider-acme.certificate.Certificate.property.recursiveNameserversInput"></a>

```csharp
public string[] RecursiveNameserversInput { get; }
```

- *Type:* string[]

---

##### `RevokeCertificateOnDestroyInput`<sup>Optional</sup> <a name="RevokeCertificateOnDestroyInput" id="@cdktf/provider-acme.certificate.Certificate.property.revokeCertificateOnDestroyInput"></a>

```csharp
public object RevokeCertificateOnDestroyInput { get; }
```

- *Type:* object

---

##### `RevokeCertificateReasonInput`<sup>Optional</sup> <a name="RevokeCertificateReasonInput" id="@cdktf/provider-acme.certificate.Certificate.property.revokeCertificateReasonInput"></a>

```csharp
public string RevokeCertificateReasonInput { get; }
```

- *Type:* string

---

##### `SubjectAlternativeNamesInput`<sup>Optional</sup> <a name="SubjectAlternativeNamesInput" id="@cdktf/provider-acme.certificate.Certificate.property.subjectAlternativeNamesInput"></a>

```csharp
public string[] SubjectAlternativeNamesInput { get; }
```

- *Type:* string[]

---

##### `TlsChallengeInput`<sup>Optional</sup> <a name="TlsChallengeInput" id="@cdktf/provider-acme.certificate.Certificate.property.tlsChallengeInput"></a>

```csharp
public CertificateTlsChallenge TlsChallengeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a>

---

##### `AccountKeyPem`<sup>Required</sup> <a name="AccountKeyPem" id="@cdktf/provider-acme.certificate.Certificate.property.accountKeyPem"></a>

```csharp
public string AccountKeyPem { get; }
```

- *Type:* string

---

##### `CertificateP12Password`<sup>Required</sup> <a name="CertificateP12Password" id="@cdktf/provider-acme.certificate.Certificate.property.certificateP12Password"></a>

```csharp
public string CertificateP12Password { get; }
```

- *Type:* string

---

##### `CertificateRequestPem`<sup>Required</sup> <a name="CertificateRequestPem" id="@cdktf/provider-acme.certificate.Certificate.property.certificateRequestPem"></a>

```csharp
public string CertificateRequestPem { get; }
```

- *Type:* string

---

##### `CertTimeout`<sup>Required</sup> <a name="CertTimeout" id="@cdktf/provider-acme.certificate.Certificate.property.certTimeout"></a>

```csharp
public double CertTimeout { get; }
```

- *Type:* double

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-acme.certificate.Certificate.property.commonName"></a>

```csharp
public string CommonName { get; }
```

- *Type:* string

---

##### `DisableCompletePropagation`<sup>Required</sup> <a name="DisableCompletePropagation" id="@cdktf/provider-acme.certificate.Certificate.property.disableCompletePropagation"></a>

```csharp
public object DisableCompletePropagation { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-acme.certificate.Certificate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-acme.certificate.Certificate.property.keyType"></a>

```csharp
public string KeyType { get; }
```

- *Type:* string

---

##### `MinDaysRemaining`<sup>Required</sup> <a name="MinDaysRemaining" id="@cdktf/provider-acme.certificate.Certificate.property.minDaysRemaining"></a>

```csharp
public double MinDaysRemaining { get; }
```

- *Type:* double

---

##### `MustStaple`<sup>Required</sup> <a name="MustStaple" id="@cdktf/provider-acme.certificate.Certificate.property.mustStaple"></a>

```csharp
public object MustStaple { get; }
```

- *Type:* object

---

##### `PreCheckDelay`<sup>Required</sup> <a name="PreCheckDelay" id="@cdktf/provider-acme.certificate.Certificate.property.preCheckDelay"></a>

```csharp
public double PreCheckDelay { get; }
```

- *Type:* double

---

##### `PreferredChain`<sup>Required</sup> <a name="PreferredChain" id="@cdktf/provider-acme.certificate.Certificate.property.preferredChain"></a>

```csharp
public string PreferredChain { get; }
```

- *Type:* string

---

##### `RecursiveNameservers`<sup>Required</sup> <a name="RecursiveNameservers" id="@cdktf/provider-acme.certificate.Certificate.property.recursiveNameservers"></a>

```csharp
public string[] RecursiveNameservers { get; }
```

- *Type:* string[]

---

##### `RevokeCertificateOnDestroy`<sup>Required</sup> <a name="RevokeCertificateOnDestroy" id="@cdktf/provider-acme.certificate.Certificate.property.revokeCertificateOnDestroy"></a>

```csharp
public object RevokeCertificateOnDestroy { get; }
```

- *Type:* object

---

##### `RevokeCertificateReason`<sup>Required</sup> <a name="RevokeCertificateReason" id="@cdktf/provider-acme.certificate.Certificate.property.revokeCertificateReason"></a>

```csharp
public string RevokeCertificateReason { get; }
```

- *Type:* string

---

##### `SubjectAlternativeNames`<sup>Required</sup> <a name="SubjectAlternativeNames" id="@cdktf/provider-acme.certificate.Certificate.property.subjectAlternativeNames"></a>

```csharp
public string[] SubjectAlternativeNames { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-acme.certificate.Certificate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateConfig <a name="CertificateConfig" id="@cdktf/provider-acme.certificate.CertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.certificate.CertificateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

new CertificateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountKeyPem,
    string CertificateP12Password = null,
    string CertificateRequestPem = null,
    double CertTimeout = null,
    string CommonName = null,
    object DisableCompletePropagation = null,
    object DnsChallenge = null,
    CertificateHttpChallenge HttpChallenge = null,
    CertificateHttpMemcachedChallenge HttpMemcachedChallenge = null,
    CertificateHttpS3Challenge HttpS3Challenge = null,
    CertificateHttpWebrootChallenge HttpWebrootChallenge = null,
    string Id = null,
    string KeyType = null,
    double MinDaysRemaining = null,
    object MustStaple = null,
    double PreCheckDelay = null,
    string PreferredChain = null,
    string[] RecursiveNameservers = null,
    object RevokeCertificateOnDestroy = null,
    string RevokeCertificateReason = null,
    string[] SubjectAlternativeNames = null,
    CertificateTlsChallenge TlsChallenge = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.accountKeyPem">AccountKeyPem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#account_key_pem Certificate#account_key_pem}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.certificateP12Password">CertificateP12Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#certificate_p12_password Certificate#certificate_p12_password}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.certificateRequestPem">CertificateRequestPem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#certificate_request_pem Certificate#certificate_request_pem}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.certTimeout">CertTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#cert_timeout Certificate#cert_timeout}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.commonName">CommonName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#common_name Certificate#common_name}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.disableCompletePropagation">DisableCompletePropagation</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#disable_complete_propagation Certificate#disable_complete_propagation}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.dnsChallenge">DnsChallenge</a></code> | <code>object</code> | dns_challenge block. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.httpChallenge">HttpChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a></code> | http_challenge block. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.httpMemcachedChallenge">HttpMemcachedChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a></code> | http_memcached_challenge block. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.httpS3Challenge">HttpS3Challenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3Challenge">CertificateHttpS3Challenge</a></code> | http_s3_challenge block. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.httpWebrootChallenge">HttpWebrootChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a></code> | http_webroot_challenge block. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#id Certificate#id}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.keyType">KeyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#key_type Certificate#key_type}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.minDaysRemaining">MinDaysRemaining</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#min_days_remaining Certificate#min_days_remaining}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.mustStaple">MustStaple</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#must_staple Certificate#must_staple}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.preCheckDelay">PreCheckDelay</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#pre_check_delay Certificate#pre_check_delay}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.preferredChain">PreferredChain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#preferred_chain Certificate#preferred_chain}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.recursiveNameservers">RecursiveNameservers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#recursive_nameservers Certificate#recursive_nameservers}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.revokeCertificateOnDestroy">RevokeCertificateOnDestroy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#revoke_certificate_on_destroy Certificate#revoke_certificate_on_destroy}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.revokeCertificateReason">RevokeCertificateReason</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#revoke_certificate_reason Certificate#revoke_certificate_reason}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#subject_alternative_names Certificate#subject_alternative_names}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.tlsChallenge">TlsChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a></code> | tls_challenge block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-acme.certificate.CertificateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-acme.certificate.CertificateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-acme.certificate.CertificateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-acme.certificate.CertificateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-acme.certificate.CertificateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-acme.certificate.CertificateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-acme.certificate.CertificateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountKeyPem`<sup>Required</sup> <a name="AccountKeyPem" id="@cdktf/provider-acme.certificate.CertificateConfig.property.accountKeyPem"></a>

```csharp
public string AccountKeyPem { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#account_key_pem Certificate#account_key_pem}.

---

##### `CertificateP12Password`<sup>Optional</sup> <a name="CertificateP12Password" id="@cdktf/provider-acme.certificate.CertificateConfig.property.certificateP12Password"></a>

```csharp
public string CertificateP12Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#certificate_p12_password Certificate#certificate_p12_password}.

---

##### `CertificateRequestPem`<sup>Optional</sup> <a name="CertificateRequestPem" id="@cdktf/provider-acme.certificate.CertificateConfig.property.certificateRequestPem"></a>

```csharp
public string CertificateRequestPem { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#certificate_request_pem Certificate#certificate_request_pem}.

---

##### `CertTimeout`<sup>Optional</sup> <a name="CertTimeout" id="@cdktf/provider-acme.certificate.CertificateConfig.property.certTimeout"></a>

```csharp
public double CertTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#cert_timeout Certificate#cert_timeout}.

---

##### `CommonName`<sup>Optional</sup> <a name="CommonName" id="@cdktf/provider-acme.certificate.CertificateConfig.property.commonName"></a>

```csharp
public string CommonName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#common_name Certificate#common_name}.

---

##### `DisableCompletePropagation`<sup>Optional</sup> <a name="DisableCompletePropagation" id="@cdktf/provider-acme.certificate.CertificateConfig.property.disableCompletePropagation"></a>

```csharp
public object DisableCompletePropagation { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#disable_complete_propagation Certificate#disable_complete_propagation}.

---

##### `DnsChallenge`<sup>Optional</sup> <a name="DnsChallenge" id="@cdktf/provider-acme.certificate.CertificateConfig.property.dnsChallenge"></a>

```csharp
public object DnsChallenge { get; set; }
```

- *Type:* object

dns_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#dns_challenge Certificate#dns_challenge}

---

##### `HttpChallenge`<sup>Optional</sup> <a name="HttpChallenge" id="@cdktf/provider-acme.certificate.CertificateConfig.property.httpChallenge"></a>

```csharp
public CertificateHttpChallenge HttpChallenge { get; set; }
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a>

http_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#http_challenge Certificate#http_challenge}

---

##### `HttpMemcachedChallenge`<sup>Optional</sup> <a name="HttpMemcachedChallenge" id="@cdktf/provider-acme.certificate.CertificateConfig.property.httpMemcachedChallenge"></a>

```csharp
public CertificateHttpMemcachedChallenge HttpMemcachedChallenge { get; set; }
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a>

http_memcached_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#http_memcached_challenge Certificate#http_memcached_challenge}

---

##### `HttpS3Challenge`<sup>Optional</sup> <a name="HttpS3Challenge" id="@cdktf/provider-acme.certificate.CertificateConfig.property.httpS3Challenge"></a>

```csharp
public CertificateHttpS3Challenge HttpS3Challenge { get; set; }
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpS3Challenge">CertificateHttpS3Challenge</a>

http_s3_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#http_s3_challenge Certificate#http_s3_challenge}

---

##### `HttpWebrootChallenge`<sup>Optional</sup> <a name="HttpWebrootChallenge" id="@cdktf/provider-acme.certificate.CertificateConfig.property.httpWebrootChallenge"></a>

```csharp
public CertificateHttpWebrootChallenge HttpWebrootChallenge { get; set; }
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a>

http_webroot_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#http_webroot_challenge Certificate#http_webroot_challenge}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-acme.certificate.CertificateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#id Certificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyType`<sup>Optional</sup> <a name="KeyType" id="@cdktf/provider-acme.certificate.CertificateConfig.property.keyType"></a>

```csharp
public string KeyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#key_type Certificate#key_type}.

---

##### `MinDaysRemaining`<sup>Optional</sup> <a name="MinDaysRemaining" id="@cdktf/provider-acme.certificate.CertificateConfig.property.minDaysRemaining"></a>

```csharp
public double MinDaysRemaining { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#min_days_remaining Certificate#min_days_remaining}.

---

##### `MustStaple`<sup>Optional</sup> <a name="MustStaple" id="@cdktf/provider-acme.certificate.CertificateConfig.property.mustStaple"></a>

```csharp
public object MustStaple { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#must_staple Certificate#must_staple}.

---

##### `PreCheckDelay`<sup>Optional</sup> <a name="PreCheckDelay" id="@cdktf/provider-acme.certificate.CertificateConfig.property.preCheckDelay"></a>

```csharp
public double PreCheckDelay { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#pre_check_delay Certificate#pre_check_delay}.

---

##### `PreferredChain`<sup>Optional</sup> <a name="PreferredChain" id="@cdktf/provider-acme.certificate.CertificateConfig.property.preferredChain"></a>

```csharp
public string PreferredChain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#preferred_chain Certificate#preferred_chain}.

---

##### `RecursiveNameservers`<sup>Optional</sup> <a name="RecursiveNameservers" id="@cdktf/provider-acme.certificate.CertificateConfig.property.recursiveNameservers"></a>

```csharp
public string[] RecursiveNameservers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#recursive_nameservers Certificate#recursive_nameservers}.

---

##### `RevokeCertificateOnDestroy`<sup>Optional</sup> <a name="RevokeCertificateOnDestroy" id="@cdktf/provider-acme.certificate.CertificateConfig.property.revokeCertificateOnDestroy"></a>

```csharp
public object RevokeCertificateOnDestroy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#revoke_certificate_on_destroy Certificate#revoke_certificate_on_destroy}.

---

##### `RevokeCertificateReason`<sup>Optional</sup> <a name="RevokeCertificateReason" id="@cdktf/provider-acme.certificate.CertificateConfig.property.revokeCertificateReason"></a>

```csharp
public string RevokeCertificateReason { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#revoke_certificate_reason Certificate#revoke_certificate_reason}.

---

##### `SubjectAlternativeNames`<sup>Optional</sup> <a name="SubjectAlternativeNames" id="@cdktf/provider-acme.certificate.CertificateConfig.property.subjectAlternativeNames"></a>

```csharp
public string[] SubjectAlternativeNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#subject_alternative_names Certificate#subject_alternative_names}.

---

##### `TlsChallenge`<sup>Optional</sup> <a name="TlsChallenge" id="@cdktf/provider-acme.certificate.CertificateConfig.property.tlsChallenge"></a>

```csharp
public CertificateTlsChallenge TlsChallenge { get; set; }
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a>

tls_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#tls_challenge Certificate#tls_challenge}

---

### CertificateDnsChallenge <a name="CertificateDnsChallenge" id="@cdktf/provider-acme.certificate.CertificateDnsChallenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.certificate.CertificateDnsChallenge.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

new CertificateDnsChallenge {
    string Provider,
    System.Collections.Generic.IDictionary<string, string> Config = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge.property.provider">Provider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#provider Certificate#provider}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge.property.config">Config</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#config Certificate#config}. |

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-acme.certificate.CertificateDnsChallenge.property.provider"></a>

```csharp
public string Provider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#provider Certificate#provider}.

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-acme.certificate.CertificateDnsChallenge.property.config"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Config { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#config Certificate#config}.

---

### CertificateHttpChallenge <a name="CertificateHttpChallenge" id="@cdktf/provider-acme.certificate.CertificateHttpChallenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.certificate.CertificateHttpChallenge.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

new CertificateHttpChallenge {
    double Port = null,
    string ProxyHeader = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#port Certificate#port}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge.property.proxyHeader">ProxyHeader</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#proxy_header Certificate#proxy_header}. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-acme.certificate.CertificateHttpChallenge.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#port Certificate#port}.

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktf/provider-acme.certificate.CertificateHttpChallenge.property.proxyHeader"></a>

```csharp
public string ProxyHeader { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#proxy_header Certificate#proxy_header}.

---

### CertificateHttpMemcachedChallenge <a name="CertificateHttpMemcachedChallenge" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

new CertificateHttpMemcachedChallenge {
    string[] Hosts
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge.property.hosts">Hosts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#hosts Certificate#hosts}. |

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge.property.hosts"></a>

```csharp
public string[] Hosts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#hosts Certificate#hosts}.

---

### CertificateHttpS3Challenge <a name="CertificateHttpS3Challenge" id="@cdktf/provider-acme.certificate.CertificateHttpS3Challenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.certificate.CertificateHttpS3Challenge.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

new CertificateHttpS3Challenge {
    string S3Bucket
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3Challenge.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#s3_bucket Certificate#s3_bucket}. |

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktf/provider-acme.certificate.CertificateHttpS3Challenge.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#s3_bucket Certificate#s3_bucket}.

---

### CertificateHttpWebrootChallenge <a name="CertificateHttpWebrootChallenge" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

new CertificateHttpWebrootChallenge {
    string Directory
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge.property.directory">Directory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#directory Certificate#directory}. |

---

##### `Directory`<sup>Required</sup> <a name="Directory" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge.property.directory"></a>

```csharp
public string Directory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#directory Certificate#directory}.

---

### CertificateTlsChallenge <a name="CertificateTlsChallenge" id="@cdktf/provider-acme.certificate.CertificateTlsChallenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.certificate.CertificateTlsChallenge.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

new CertificateTlsChallenge {
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#port Certificate#port}. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-acme.certificate.CertificateTlsChallenge.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.28.1/docs/resources/certificate#port Certificate#port}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificateDnsChallengeList <a name="CertificateDnsChallengeList" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

new CertificateDnsChallengeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.get"></a>

```csharp
private CertificateDnsChallengeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CertificateDnsChallengeOutputReference <a name="CertificateDnsChallengeOutputReference" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

new CertificateDnsChallengeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.resetConfig"></a>

```csharp
private void ResetConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.configInput">ConfigInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.providerInput">ProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.config">Config</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.provider">Provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.configInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConfigInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProviderInput`<sup>Optional</sup> <a name="ProviderInput" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.providerInput"></a>

```csharp
public string ProviderInput { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.config"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Config { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.provider"></a>

```csharp
public string Provider { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CertificateHttpChallengeOutputReference <a name="CertificateHttpChallengeOutputReference" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

new CertificateHttpChallengeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.resetProxyHeader"></a>

```csharp
private void ResetProxyHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.proxyHeader">ProxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.proxyHeaderInput"></a>

```csharp
public string ProxyHeaderInput { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.proxyHeader"></a>

```csharp
public string ProxyHeader { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.internalValue"></a>

```csharp
public CertificateHttpChallenge InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a>

---


### CertificateHttpMemcachedChallengeOutputReference <a name="CertificateHttpMemcachedChallengeOutputReference" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

new CertificateHttpMemcachedChallengeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.hostsInput">HostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.hosts">Hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.hostsInput"></a>

```csharp
public string[] HostsInput { get; }
```

- *Type:* string[]

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.hosts"></a>

```csharp
public string[] Hosts { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.internalValue"></a>

```csharp
public CertificateHttpMemcachedChallenge InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a>

---


### CertificateHttpS3ChallengeOutputReference <a name="CertificateHttpS3ChallengeOutputReference" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

new CertificateHttpS3ChallengeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3Challenge">CertificateHttpS3Challenge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.s3BucketInput"></a>

```csharp
public string S3BucketInput { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.internalValue"></a>

```csharp
public CertificateHttpS3Challenge InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpS3Challenge">CertificateHttpS3Challenge</a>

---


### CertificateHttpWebrootChallengeOutputReference <a name="CertificateHttpWebrootChallengeOutputReference" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

new CertificateHttpWebrootChallengeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.directoryInput">DirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.directory">Directory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DirectoryInput`<sup>Optional</sup> <a name="DirectoryInput" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.directoryInput"></a>

```csharp
public string DirectoryInput { get; }
```

- *Type:* string

---

##### `Directory`<sup>Required</sup> <a name="Directory" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.directory"></a>

```csharp
public string Directory { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.internalValue"></a>

```csharp
public CertificateHttpWebrootChallenge InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a>

---


### CertificateTlsChallengeOutputReference <a name="CertificateTlsChallengeOutputReference" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Acme;

new CertificateTlsChallengeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.internalValue"></a>

```csharp
public CertificateTlsChallenge InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a>

---



