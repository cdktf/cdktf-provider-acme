# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### AcmeProvider <a name="@cdktf/provider-acme.AcmeProvider" id="cdktfprovideracmeacmeprovider"></a>

Represents a {@link https://www.terraform.io/docs/providers/acme acme}.

#### Initializers <a name="@cdktf/provider-acme.AcmeProvider.Initializer" id="cdktfprovideracmeacmeproviderinitializer"></a>

```typescript
import { AcmeProvider } from '@cdktf/provider-acme'

new AcmeProvider(scope: Construct, id: string, config: AcmeProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovideracmeacmeproviderparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovideracmeacmeproviderparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovideracmeacmeproviderparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-acme.AcmeProviderConfig`](#@cdktf/provider-acme.AcmeProviderConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-acme.AcmeProvider.parameter.scope" id="cdktfprovideracmeacmeproviderparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-acme.AcmeProvider.parameter.id" id="cdktfprovideracmeacmeproviderparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-acme.AcmeProvider.parameter.config" id="cdktfprovideracmeacmeproviderparameterconfig"></a>

- *Type:* [`@cdktf/provider-acme.AcmeProviderConfig`](#@cdktf/provider-acme.AcmeProviderConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetAlias`](#cdktfprovideracmeacmeproviderresetalias) | *No description.* |

---

##### `resetAlias` <a name="@cdktf/provider-acme.AcmeProvider.resetAlias" id="cdktfprovideracmeacmeproviderresetalias"></a>

```typescript
public resetAlias()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`aliasInput`](#cdktfprovideracmeacmeproviderpropertyaliasinput) | `string` | *No description.* |
| [`serverUrlInput`](#cdktfprovideracmeacmeproviderpropertyserverurlinput) | `string` | *No description.* |
| [`alias`](#cdktfprovideracmeacmeproviderpropertyalias) | `string` | *No description.* |
| [`serverUrl`](#cdktfprovideracmeacmeproviderpropertyserverurl) | `string` | *No description.* |

---

##### `aliasInput`<sup>Optional</sup> <a name="@cdktf/provider-acme.AcmeProvider.property.aliasInput" id="cdktfprovideracmeacmeproviderpropertyaliasinput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* `string`

---

##### `serverUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-acme.AcmeProvider.property.serverUrlInput" id="cdktfprovideracmeacmeproviderpropertyserverurlinput"></a>

```typescript
public readonly serverUrlInput: string;
```

- *Type:* `string`

---

##### `alias`<sup>Optional</sup> <a name="@cdktf/provider-acme.AcmeProvider.property.alias" id="cdktfprovideracmeacmeproviderpropertyalias"></a>

```typescript
public readonly alias: string;
```

- *Type:* `string`

---

##### `serverUrl`<sup>Optional</sup> <a name="@cdktf/provider-acme.AcmeProvider.property.serverUrl" id="cdktfprovideracmeacmeproviderpropertyserverurl"></a>

```typescript
public readonly serverUrl: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovideracmeacmeproviderpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-acme.AcmeProvider.property.tfResourceType" id="cdktfprovideracmeacmeproviderpropertytfresourcetype"></a>

- *Type:* `string`

---

### Certificate <a name="@cdktf/provider-acme.Certificate" id="cdktfprovideracmecertificate"></a>

Represents a {@link https://www.terraform.io/docs/providers/acme/r/certificate acme_certificate}.

#### Initializers <a name="@cdktf/provider-acme.Certificate.Initializer" id="cdktfprovideracmecertificateinitializer"></a>

```typescript
import { Certificate } from '@cdktf/provider-acme'

new Certificate(scope: Construct, id: string, config: CertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovideracmecertificateparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovideracmecertificateparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovideracmecertificateparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-acme.CertificateConfig`](#@cdktf/provider-acme.CertificateConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.parameter.scope" id="cdktfprovideracmecertificateparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.parameter.id" id="cdktfprovideracmecertificateparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.parameter.config" id="cdktfprovideracmecertificateparameterconfig"></a>

- *Type:* [`@cdktf/provider-acme.CertificateConfig`](#@cdktf/provider-acme.CertificateConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`putHttpChallenge`](#cdktfprovideracmecertificateputhttpchallenge) | *No description.* |
| [`putHttpMemcachedChallenge`](#cdktfprovideracmecertificateputhttpmemcachedchallenge) | *No description.* |
| [`putHttpWebrootChallenge`](#cdktfprovideracmecertificateputhttpwebrootchallenge) | *No description.* |
| [`putTlsChallenge`](#cdktfprovideracmecertificateputtlschallenge) | *No description.* |
| [`resetCertificateP12Password`](#cdktfprovideracmecertificateresetcertificatep12password) | *No description.* |
| [`resetCertificateRequestPem`](#cdktfprovideracmecertificateresetcertificaterequestpem) | *No description.* |
| [`resetCommonName`](#cdktfprovideracmecertificateresetcommonname) | *No description.* |
| [`resetDisableCompletePropagation`](#cdktfprovideracmecertificateresetdisablecompletepropagation) | *No description.* |
| [`resetDnsChallenge`](#cdktfprovideracmecertificateresetdnschallenge) | *No description.* |
| [`resetHttpChallenge`](#cdktfprovideracmecertificateresethttpchallenge) | *No description.* |
| [`resetHttpMemcachedChallenge`](#cdktfprovideracmecertificateresethttpmemcachedchallenge) | *No description.* |
| [`resetHttpWebrootChallenge`](#cdktfprovideracmecertificateresethttpwebrootchallenge) | *No description.* |
| [`resetKeyType`](#cdktfprovideracmecertificateresetkeytype) | *No description.* |
| [`resetMinDaysRemaining`](#cdktfprovideracmecertificateresetmindaysremaining) | *No description.* |
| [`resetMustStaple`](#cdktfprovideracmecertificateresetmuststaple) | *No description.* |
| [`resetPreCheckDelay`](#cdktfprovideracmecertificateresetprecheckdelay) | *No description.* |
| [`resetPreferredChain`](#cdktfprovideracmecertificateresetpreferredchain) | *No description.* |
| [`resetRecursiveNameservers`](#cdktfprovideracmecertificateresetrecursivenameservers) | *No description.* |
| [`resetRevokeCertificateOnDestroy`](#cdktfprovideracmecertificateresetrevokecertificateondestroy) | *No description.* |
| [`resetSubjectAlternativeNames`](#cdktfprovideracmecertificateresetsubjectalternativenames) | *No description.* |
| [`resetTlsChallenge`](#cdktfprovideracmecertificateresettlschallenge) | *No description.* |

---

##### `putHttpChallenge` <a name="@cdktf/provider-acme.Certificate.putHttpChallenge" id="cdktfprovideracmecertificateputhttpchallenge"></a>

```typescript
public putHttpChallenge(value: CertificateHttpChallenge)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.parameter.value" id="cdktfprovideracmecertificateparametervalue"></a>

- *Type:* [`@cdktf/provider-acme.CertificateHttpChallenge`](#@cdktf/provider-acme.CertificateHttpChallenge)

---

##### `putHttpMemcachedChallenge` <a name="@cdktf/provider-acme.Certificate.putHttpMemcachedChallenge" id="cdktfprovideracmecertificateputhttpmemcachedchallenge"></a>

```typescript
public putHttpMemcachedChallenge(value: CertificateHttpMemcachedChallenge)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.parameter.value" id="cdktfprovideracmecertificateparametervalue"></a>

- *Type:* [`@cdktf/provider-acme.CertificateHttpMemcachedChallenge`](#@cdktf/provider-acme.CertificateHttpMemcachedChallenge)

---

##### `putHttpWebrootChallenge` <a name="@cdktf/provider-acme.Certificate.putHttpWebrootChallenge" id="cdktfprovideracmecertificateputhttpwebrootchallenge"></a>

```typescript
public putHttpWebrootChallenge(value: CertificateHttpWebrootChallenge)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.parameter.value" id="cdktfprovideracmecertificateparametervalue"></a>

- *Type:* [`@cdktf/provider-acme.CertificateHttpWebrootChallenge`](#@cdktf/provider-acme.CertificateHttpWebrootChallenge)

---

##### `putTlsChallenge` <a name="@cdktf/provider-acme.Certificate.putTlsChallenge" id="cdktfprovideracmecertificateputtlschallenge"></a>

```typescript
public putTlsChallenge(value: CertificateTlsChallenge)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.parameter.value" id="cdktfprovideracmecertificateparametervalue"></a>

- *Type:* [`@cdktf/provider-acme.CertificateTlsChallenge`](#@cdktf/provider-acme.CertificateTlsChallenge)

---

##### `resetCertificateP12Password` <a name="@cdktf/provider-acme.Certificate.resetCertificateP12Password" id="cdktfprovideracmecertificateresetcertificatep12password"></a>

```typescript
public resetCertificateP12Password()
```

##### `resetCertificateRequestPem` <a name="@cdktf/provider-acme.Certificate.resetCertificateRequestPem" id="cdktfprovideracmecertificateresetcertificaterequestpem"></a>

```typescript
public resetCertificateRequestPem()
```

##### `resetCommonName` <a name="@cdktf/provider-acme.Certificate.resetCommonName" id="cdktfprovideracmecertificateresetcommonname"></a>

```typescript
public resetCommonName()
```

##### `resetDisableCompletePropagation` <a name="@cdktf/provider-acme.Certificate.resetDisableCompletePropagation" id="cdktfprovideracmecertificateresetdisablecompletepropagation"></a>

```typescript
public resetDisableCompletePropagation()
```

##### `resetDnsChallenge` <a name="@cdktf/provider-acme.Certificate.resetDnsChallenge" id="cdktfprovideracmecertificateresetdnschallenge"></a>

```typescript
public resetDnsChallenge()
```

##### `resetHttpChallenge` <a name="@cdktf/provider-acme.Certificate.resetHttpChallenge" id="cdktfprovideracmecertificateresethttpchallenge"></a>

```typescript
public resetHttpChallenge()
```

##### `resetHttpMemcachedChallenge` <a name="@cdktf/provider-acme.Certificate.resetHttpMemcachedChallenge" id="cdktfprovideracmecertificateresethttpmemcachedchallenge"></a>

```typescript
public resetHttpMemcachedChallenge()
```

##### `resetHttpWebrootChallenge` <a name="@cdktf/provider-acme.Certificate.resetHttpWebrootChallenge" id="cdktfprovideracmecertificateresethttpwebrootchallenge"></a>

```typescript
public resetHttpWebrootChallenge()
```

##### `resetKeyType` <a name="@cdktf/provider-acme.Certificate.resetKeyType" id="cdktfprovideracmecertificateresetkeytype"></a>

```typescript
public resetKeyType()
```

##### `resetMinDaysRemaining` <a name="@cdktf/provider-acme.Certificate.resetMinDaysRemaining" id="cdktfprovideracmecertificateresetmindaysremaining"></a>

```typescript
public resetMinDaysRemaining()
```

##### `resetMustStaple` <a name="@cdktf/provider-acme.Certificate.resetMustStaple" id="cdktfprovideracmecertificateresetmuststaple"></a>

```typescript
public resetMustStaple()
```

##### `resetPreCheckDelay` <a name="@cdktf/provider-acme.Certificate.resetPreCheckDelay" id="cdktfprovideracmecertificateresetprecheckdelay"></a>

```typescript
public resetPreCheckDelay()
```

##### `resetPreferredChain` <a name="@cdktf/provider-acme.Certificate.resetPreferredChain" id="cdktfprovideracmecertificateresetpreferredchain"></a>

```typescript
public resetPreferredChain()
```

##### `resetRecursiveNameservers` <a name="@cdktf/provider-acme.Certificate.resetRecursiveNameservers" id="cdktfprovideracmecertificateresetrecursivenameservers"></a>

```typescript
public resetRecursiveNameservers()
```

##### `resetRevokeCertificateOnDestroy` <a name="@cdktf/provider-acme.Certificate.resetRevokeCertificateOnDestroy" id="cdktfprovideracmecertificateresetrevokecertificateondestroy"></a>

```typescript
public resetRevokeCertificateOnDestroy()
```

##### `resetSubjectAlternativeNames` <a name="@cdktf/provider-acme.Certificate.resetSubjectAlternativeNames" id="cdktfprovideracmecertificateresetsubjectalternativenames"></a>

```typescript
public resetSubjectAlternativeNames()
```

##### `resetTlsChallenge` <a name="@cdktf/provider-acme.Certificate.resetTlsChallenge" id="cdktfprovideracmecertificateresettlschallenge"></a>

```typescript
public resetTlsChallenge()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`certificateDomain`](#cdktfprovideracmecertificatepropertycertificatedomain)<span title="Required">*</span> | `string` | *No description.* |
| [`certificateP12`](#cdktfprovideracmecertificatepropertycertificatep12)<span title="Required">*</span> | `string` | *No description.* |
| [`certificatePem`](#cdktfprovideracmecertificatepropertycertificatepem)<span title="Required">*</span> | `string` | *No description.* |
| [`certificateUrl`](#cdktfprovideracmecertificatepropertycertificateurl)<span title="Required">*</span> | `string` | *No description.* |
| [`httpChallenge`](#cdktfprovideracmecertificatepropertyhttpchallenge)<span title="Required">*</span> | [`@cdktf/provider-acme.CertificateHttpChallengeOutputReference`](#@cdktf/provider-acme.CertificateHttpChallengeOutputReference) | *No description.* |
| [`httpMemcachedChallenge`](#cdktfprovideracmecertificatepropertyhttpmemcachedchallenge)<span title="Required">*</span> | [`@cdktf/provider-acme.CertificateHttpMemcachedChallengeOutputReference`](#@cdktf/provider-acme.CertificateHttpMemcachedChallengeOutputReference) | *No description.* |
| [`httpWebrootChallenge`](#cdktfprovideracmecertificatepropertyhttpwebrootchallenge)<span title="Required">*</span> | [`@cdktf/provider-acme.CertificateHttpWebrootChallengeOutputReference`](#@cdktf/provider-acme.CertificateHttpWebrootChallengeOutputReference) | *No description.* |
| [`id`](#cdktfprovideracmecertificatepropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`issuerPem`](#cdktfprovideracmecertificatepropertyissuerpem)<span title="Required">*</span> | `string` | *No description.* |
| [`privateKeyPem`](#cdktfprovideracmecertificatepropertyprivatekeypem)<span title="Required">*</span> | `string` | *No description.* |
| [`tlsChallenge`](#cdktfprovideracmecertificatepropertytlschallenge)<span title="Required">*</span> | [`@cdktf/provider-acme.CertificateTlsChallengeOutputReference`](#@cdktf/provider-acme.CertificateTlsChallengeOutputReference) | *No description.* |
| [`accountKeyPemInput`](#cdktfprovideracmecertificatepropertyaccountkeypeminput) | `string` | *No description.* |
| [`certificateP12PasswordInput`](#cdktfprovideracmecertificatepropertycertificatep12passwordinput) | `string` | *No description.* |
| [`certificateRequestPemInput`](#cdktfprovideracmecertificatepropertycertificaterequestpeminput) | `string` | *No description.* |
| [`commonNameInput`](#cdktfprovideracmecertificatepropertycommonnameinput) | `string` | *No description.* |
| [`disableCompletePropagationInput`](#cdktfprovideracmecertificatepropertydisablecompletepropagationinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`dnsChallengeInput`](#cdktfprovideracmecertificatepropertydnschallengeinput) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-acme.CertificateDnsChallenge`](#@cdktf/provider-acme.CertificateDnsChallenge)[] | *No description.* |
| [`httpChallengeInput`](#cdktfprovideracmecertificatepropertyhttpchallengeinput) | [`@cdktf/provider-acme.CertificateHttpChallenge`](#@cdktf/provider-acme.CertificateHttpChallenge) | *No description.* |
| [`httpMemcachedChallengeInput`](#cdktfprovideracmecertificatepropertyhttpmemcachedchallengeinput) | [`@cdktf/provider-acme.CertificateHttpMemcachedChallenge`](#@cdktf/provider-acme.CertificateHttpMemcachedChallenge) | *No description.* |
| [`httpWebrootChallengeInput`](#cdktfprovideracmecertificatepropertyhttpwebrootchallengeinput) | [`@cdktf/provider-acme.CertificateHttpWebrootChallenge`](#@cdktf/provider-acme.CertificateHttpWebrootChallenge) | *No description.* |
| [`keyTypeInput`](#cdktfprovideracmecertificatepropertykeytypeinput) | `string` | *No description.* |
| [`minDaysRemainingInput`](#cdktfprovideracmecertificatepropertymindaysremaininginput) | `number` | *No description.* |
| [`mustStapleInput`](#cdktfprovideracmecertificatepropertymuststapleinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`preCheckDelayInput`](#cdktfprovideracmecertificatepropertyprecheckdelayinput) | `number` | *No description.* |
| [`preferredChainInput`](#cdktfprovideracmecertificatepropertypreferredchaininput) | `string` | *No description.* |
| [`recursiveNameserversInput`](#cdktfprovideracmecertificatepropertyrecursivenameserversinput) | `string`[] | *No description.* |
| [`revokeCertificateOnDestroyInput`](#cdktfprovideracmecertificatepropertyrevokecertificateondestroyinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`subjectAlternativeNamesInput`](#cdktfprovideracmecertificatepropertysubjectalternativenamesinput) | `string`[] | *No description.* |
| [`tlsChallengeInput`](#cdktfprovideracmecertificatepropertytlschallengeinput) | [`@cdktf/provider-acme.CertificateTlsChallenge`](#@cdktf/provider-acme.CertificateTlsChallenge) | *No description.* |
| [`accountKeyPem`](#cdktfprovideracmecertificatepropertyaccountkeypem)<span title="Required">*</span> | `string` | *No description.* |
| [`certificateP12Password`](#cdktfprovideracmecertificatepropertycertificatep12password)<span title="Required">*</span> | `string` | *No description.* |
| [`certificateRequestPem`](#cdktfprovideracmecertificatepropertycertificaterequestpem)<span title="Required">*</span> | `string` | *No description.* |
| [`commonName`](#cdktfprovideracmecertificatepropertycommonname)<span title="Required">*</span> | `string` | *No description.* |
| [`disableCompletePropagation`](#cdktfprovideracmecertificatepropertydisablecompletepropagation)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`dnsChallenge`](#cdktfprovideracmecertificatepropertydnschallenge)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-acme.CertificateDnsChallenge`](#@cdktf/provider-acme.CertificateDnsChallenge)[] | *No description.* |
| [`keyType`](#cdktfprovideracmecertificatepropertykeytype)<span title="Required">*</span> | `string` | *No description.* |
| [`minDaysRemaining`](#cdktfprovideracmecertificatepropertymindaysremaining)<span title="Required">*</span> | `number` | *No description.* |
| [`mustStaple`](#cdktfprovideracmecertificatepropertymuststaple)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`preCheckDelay`](#cdktfprovideracmecertificatepropertyprecheckdelay)<span title="Required">*</span> | `number` | *No description.* |
| [`preferredChain`](#cdktfprovideracmecertificatepropertypreferredchain)<span title="Required">*</span> | `string` | *No description.* |
| [`recursiveNameservers`](#cdktfprovideracmecertificatepropertyrecursivenameservers)<span title="Required">*</span> | `string`[] | *No description.* |
| [`revokeCertificateOnDestroy`](#cdktfprovideracmecertificatepropertyrevokecertificateondestroy)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`subjectAlternativeNames`](#cdktfprovideracmecertificatepropertysubjectalternativenames)<span title="Required">*</span> | `string`[] | *No description.* |

---

##### `certificateDomain`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.property.certificateDomain" id="cdktfprovideracmecertificatepropertycertificatedomain"></a>

```typescript
public readonly certificateDomain: string;
```

- *Type:* `string`

---

##### `certificateP12`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.property.certificateP12" id="cdktfprovideracmecertificatepropertycertificatep12"></a>

```typescript
public readonly certificateP12: string;
```

- *Type:* `string`

---

##### `certificatePem`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.property.certificatePem" id="cdktfprovideracmecertificatepropertycertificatepem"></a>

```typescript
public readonly certificatePem: string;
```

- *Type:* `string`

---

##### `certificateUrl`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.property.certificateUrl" id="cdktfprovideracmecertificatepropertycertificateurl"></a>

```typescript
public readonly certificateUrl: string;
```

- *Type:* `string`

---

##### `httpChallenge`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.property.httpChallenge" id="cdktfprovideracmecertificatepropertyhttpchallenge"></a>

```typescript
public readonly httpChallenge: CertificateHttpChallengeOutputReference;
```

- *Type:* [`@cdktf/provider-acme.CertificateHttpChallengeOutputReference`](#@cdktf/provider-acme.CertificateHttpChallengeOutputReference)

---

##### `httpMemcachedChallenge`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.property.httpMemcachedChallenge" id="cdktfprovideracmecertificatepropertyhttpmemcachedchallenge"></a>

```typescript
public readonly httpMemcachedChallenge: CertificateHttpMemcachedChallengeOutputReference;
```

- *Type:* [`@cdktf/provider-acme.CertificateHttpMemcachedChallengeOutputReference`](#@cdktf/provider-acme.CertificateHttpMemcachedChallengeOutputReference)

---

##### `httpWebrootChallenge`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.property.httpWebrootChallenge" id="cdktfprovideracmecertificatepropertyhttpwebrootchallenge"></a>

```typescript
public readonly httpWebrootChallenge: CertificateHttpWebrootChallengeOutputReference;
```

- *Type:* [`@cdktf/provider-acme.CertificateHttpWebrootChallengeOutputReference`](#@cdktf/provider-acme.CertificateHttpWebrootChallengeOutputReference)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.property.id" id="cdktfprovideracmecertificatepropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `issuerPem`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.property.issuerPem" id="cdktfprovideracmecertificatepropertyissuerpem"></a>

```typescript
public readonly issuerPem: string;
```

- *Type:* `string`

---

##### `privateKeyPem`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.property.privateKeyPem" id="cdktfprovideracmecertificatepropertyprivatekeypem"></a>

```typescript
public readonly privateKeyPem: string;
```

- *Type:* `string`

---

##### `tlsChallenge`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.property.tlsChallenge" id="cdktfprovideracmecertificatepropertytlschallenge"></a>

```typescript
public readonly tlsChallenge: CertificateTlsChallengeOutputReference;
```

- *Type:* [`@cdktf/provider-acme.CertificateTlsChallengeOutputReference`](#@cdktf/provider-acme.CertificateTlsChallengeOutputReference)

---

##### `accountKeyPemInput`<sup>Optional</sup> <a name="@cdktf/provider-acme.Certificate.property.accountKeyPemInput" id="cdktfprovideracmecertificatepropertyaccountkeypeminput"></a>

```typescript
public readonly accountKeyPemInput: string;
```

- *Type:* `string`

---

##### `certificateP12PasswordInput`<sup>Optional</sup> <a name="@cdktf/provider-acme.Certificate.property.certificateP12PasswordInput" id="cdktfprovideracmecertificatepropertycertificatep12passwordinput"></a>

```typescript
public readonly certificateP12PasswordInput: string;
```

- *Type:* `string`

---

##### `certificateRequestPemInput`<sup>Optional</sup> <a name="@cdktf/provider-acme.Certificate.property.certificateRequestPemInput" id="cdktfprovideracmecertificatepropertycertificaterequestpeminput"></a>

```typescript
public readonly certificateRequestPemInput: string;
```

- *Type:* `string`

---

##### `commonNameInput`<sup>Optional</sup> <a name="@cdktf/provider-acme.Certificate.property.commonNameInput" id="cdktfprovideracmecertificatepropertycommonnameinput"></a>

```typescript
public readonly commonNameInput: string;
```

- *Type:* `string`

---

##### `disableCompletePropagationInput`<sup>Optional</sup> <a name="@cdktf/provider-acme.Certificate.property.disableCompletePropagationInput" id="cdktfprovideracmecertificatepropertydisablecompletepropagationinput"></a>

```typescript
public readonly disableCompletePropagationInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dnsChallengeInput`<sup>Optional</sup> <a name="@cdktf/provider-acme.Certificate.property.dnsChallengeInput" id="cdktfprovideracmecertificatepropertydnschallengeinput"></a>

```typescript
public readonly dnsChallengeInput: IResolvable | CertificateDnsChallenge[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-acme.CertificateDnsChallenge`](#@cdktf/provider-acme.CertificateDnsChallenge)[]

---

##### `httpChallengeInput`<sup>Optional</sup> <a name="@cdktf/provider-acme.Certificate.property.httpChallengeInput" id="cdktfprovideracmecertificatepropertyhttpchallengeinput"></a>

```typescript
public readonly httpChallengeInput: CertificateHttpChallenge;
```

- *Type:* [`@cdktf/provider-acme.CertificateHttpChallenge`](#@cdktf/provider-acme.CertificateHttpChallenge)

---

##### `httpMemcachedChallengeInput`<sup>Optional</sup> <a name="@cdktf/provider-acme.Certificate.property.httpMemcachedChallengeInput" id="cdktfprovideracmecertificatepropertyhttpmemcachedchallengeinput"></a>

```typescript
public readonly httpMemcachedChallengeInput: CertificateHttpMemcachedChallenge;
```

- *Type:* [`@cdktf/provider-acme.CertificateHttpMemcachedChallenge`](#@cdktf/provider-acme.CertificateHttpMemcachedChallenge)

---

##### `httpWebrootChallengeInput`<sup>Optional</sup> <a name="@cdktf/provider-acme.Certificate.property.httpWebrootChallengeInput" id="cdktfprovideracmecertificatepropertyhttpwebrootchallengeinput"></a>

```typescript
public readonly httpWebrootChallengeInput: CertificateHttpWebrootChallenge;
```

- *Type:* [`@cdktf/provider-acme.CertificateHttpWebrootChallenge`](#@cdktf/provider-acme.CertificateHttpWebrootChallenge)

---

##### `keyTypeInput`<sup>Optional</sup> <a name="@cdktf/provider-acme.Certificate.property.keyTypeInput" id="cdktfprovideracmecertificatepropertykeytypeinput"></a>

```typescript
public readonly keyTypeInput: string;
```

- *Type:* `string`

---

##### `minDaysRemainingInput`<sup>Optional</sup> <a name="@cdktf/provider-acme.Certificate.property.minDaysRemainingInput" id="cdktfprovideracmecertificatepropertymindaysremaininginput"></a>

```typescript
public readonly minDaysRemainingInput: number;
```

- *Type:* `number`

---

##### `mustStapleInput`<sup>Optional</sup> <a name="@cdktf/provider-acme.Certificate.property.mustStapleInput" id="cdktfprovideracmecertificatepropertymuststapleinput"></a>

```typescript
public readonly mustStapleInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `preCheckDelayInput`<sup>Optional</sup> <a name="@cdktf/provider-acme.Certificate.property.preCheckDelayInput" id="cdktfprovideracmecertificatepropertyprecheckdelayinput"></a>

```typescript
public readonly preCheckDelayInput: number;
```

- *Type:* `number`

---

##### `preferredChainInput`<sup>Optional</sup> <a name="@cdktf/provider-acme.Certificate.property.preferredChainInput" id="cdktfprovideracmecertificatepropertypreferredchaininput"></a>

```typescript
public readonly preferredChainInput: string;
```

- *Type:* `string`

---

##### `recursiveNameserversInput`<sup>Optional</sup> <a name="@cdktf/provider-acme.Certificate.property.recursiveNameserversInput" id="cdktfprovideracmecertificatepropertyrecursivenameserversinput"></a>

```typescript
public readonly recursiveNameserversInput: string[];
```

- *Type:* `string`[]

---

##### `revokeCertificateOnDestroyInput`<sup>Optional</sup> <a name="@cdktf/provider-acme.Certificate.property.revokeCertificateOnDestroyInput" id="cdktfprovideracmecertificatepropertyrevokecertificateondestroyinput"></a>

```typescript
public readonly revokeCertificateOnDestroyInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `subjectAlternativeNamesInput`<sup>Optional</sup> <a name="@cdktf/provider-acme.Certificate.property.subjectAlternativeNamesInput" id="cdktfprovideracmecertificatepropertysubjectalternativenamesinput"></a>

```typescript
public readonly subjectAlternativeNamesInput: string[];
```

- *Type:* `string`[]

---

##### `tlsChallengeInput`<sup>Optional</sup> <a name="@cdktf/provider-acme.Certificate.property.tlsChallengeInput" id="cdktfprovideracmecertificatepropertytlschallengeinput"></a>

```typescript
public readonly tlsChallengeInput: CertificateTlsChallenge;
```

- *Type:* [`@cdktf/provider-acme.CertificateTlsChallenge`](#@cdktf/provider-acme.CertificateTlsChallenge)

---

##### `accountKeyPem`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.property.accountKeyPem" id="cdktfprovideracmecertificatepropertyaccountkeypem"></a>

```typescript
public readonly accountKeyPem: string;
```

- *Type:* `string`

---

##### `certificateP12Password`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.property.certificateP12Password" id="cdktfprovideracmecertificatepropertycertificatep12password"></a>

```typescript
public readonly certificateP12Password: string;
```

- *Type:* `string`

---

##### `certificateRequestPem`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.property.certificateRequestPem" id="cdktfprovideracmecertificatepropertycertificaterequestpem"></a>

```typescript
public readonly certificateRequestPem: string;
```

- *Type:* `string`

---

##### `commonName`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.property.commonName" id="cdktfprovideracmecertificatepropertycommonname"></a>

```typescript
public readonly commonName: string;
```

- *Type:* `string`

---

##### `disableCompletePropagation`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.property.disableCompletePropagation" id="cdktfprovideracmecertificatepropertydisablecompletepropagation"></a>

```typescript
public readonly disableCompletePropagation: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dnsChallenge`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.property.dnsChallenge" id="cdktfprovideracmecertificatepropertydnschallenge"></a>

```typescript
public readonly dnsChallenge: IResolvable | CertificateDnsChallenge[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-acme.CertificateDnsChallenge`](#@cdktf/provider-acme.CertificateDnsChallenge)[]

---

##### `keyType`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.property.keyType" id="cdktfprovideracmecertificatepropertykeytype"></a>

```typescript
public readonly keyType: string;
```

- *Type:* `string`

---

##### `minDaysRemaining`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.property.minDaysRemaining" id="cdktfprovideracmecertificatepropertymindaysremaining"></a>

```typescript
public readonly minDaysRemaining: number;
```

- *Type:* `number`

---

##### `mustStaple`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.property.mustStaple" id="cdktfprovideracmecertificatepropertymuststaple"></a>

```typescript
public readonly mustStaple: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `preCheckDelay`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.property.preCheckDelay" id="cdktfprovideracmecertificatepropertyprecheckdelay"></a>

```typescript
public readonly preCheckDelay: number;
```

- *Type:* `number`

---

##### `preferredChain`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.property.preferredChain" id="cdktfprovideracmecertificatepropertypreferredchain"></a>

```typescript
public readonly preferredChain: string;
```

- *Type:* `string`

---

##### `recursiveNameservers`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.property.recursiveNameservers" id="cdktfprovideracmecertificatepropertyrecursivenameservers"></a>

```typescript
public readonly recursiveNameservers: string[];
```

- *Type:* `string`[]

---

##### `revokeCertificateOnDestroy`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.property.revokeCertificateOnDestroy" id="cdktfprovideracmecertificatepropertyrevokecertificateondestroy"></a>

```typescript
public readonly revokeCertificateOnDestroy: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `subjectAlternativeNames`<sup>Required</sup> <a name="@cdktf/provider-acme.Certificate.property.subjectAlternativeNames" id="cdktfprovideracmecertificatepropertysubjectalternativenames"></a>

```typescript
public readonly subjectAlternativeNames: string[];
```

- *Type:* `string`[]

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovideracmecertificatepropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-acme.Certificate.property.tfResourceType" id="cdktfprovideracmecertificatepropertytfresourcetype"></a>

- *Type:* `string`

---

### Registration <a name="@cdktf/provider-acme.Registration" id="cdktfprovideracmeregistration"></a>

Represents a {@link https://www.terraform.io/docs/providers/acme/r/registration acme_registration}.

#### Initializers <a name="@cdktf/provider-acme.Registration.Initializer" id="cdktfprovideracmeregistrationinitializer"></a>

```typescript
import { Registration } from '@cdktf/provider-acme'

new Registration(scope: Construct, id: string, config: RegistrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovideracmeregistrationparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovideracmeregistrationparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovideracmeregistrationparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-acme.RegistrationConfig`](#@cdktf/provider-acme.RegistrationConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-acme.Registration.parameter.scope" id="cdktfprovideracmeregistrationparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-acme.Registration.parameter.id" id="cdktfprovideracmeregistrationparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-acme.Registration.parameter.config" id="cdktfprovideracmeregistrationparameterconfig"></a>

- *Type:* [`@cdktf/provider-acme.RegistrationConfig`](#@cdktf/provider-acme.RegistrationConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`putExternalAccountBinding`](#cdktfprovideracmeregistrationputexternalaccountbinding) | *No description.* |
| [`resetExternalAccountBinding`](#cdktfprovideracmeregistrationresetexternalaccountbinding) | *No description.* |

---

##### `putExternalAccountBinding` <a name="@cdktf/provider-acme.Registration.putExternalAccountBinding" id="cdktfprovideracmeregistrationputexternalaccountbinding"></a>

```typescript
public putExternalAccountBinding(value: RegistrationExternalAccountBinding)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-acme.Registration.parameter.value" id="cdktfprovideracmeregistrationparametervalue"></a>

- *Type:* [`@cdktf/provider-acme.RegistrationExternalAccountBinding`](#@cdktf/provider-acme.RegistrationExternalAccountBinding)

---

##### `resetExternalAccountBinding` <a name="@cdktf/provider-acme.Registration.resetExternalAccountBinding" id="cdktfprovideracmeregistrationresetexternalaccountbinding"></a>

```typescript
public resetExternalAccountBinding()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`externalAccountBinding`](#cdktfprovideracmeregistrationpropertyexternalaccountbinding)<span title="Required">*</span> | [`@cdktf/provider-acme.RegistrationExternalAccountBindingOutputReference`](#@cdktf/provider-acme.RegistrationExternalAccountBindingOutputReference) | *No description.* |
| [`id`](#cdktfprovideracmeregistrationpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`registrationUrl`](#cdktfprovideracmeregistrationpropertyregistrationurl)<span title="Required">*</span> | `string` | *No description.* |
| [`accountKeyPemInput`](#cdktfprovideracmeregistrationpropertyaccountkeypeminput) | `string` | *No description.* |
| [`emailAddressInput`](#cdktfprovideracmeregistrationpropertyemailaddressinput) | `string` | *No description.* |
| [`externalAccountBindingInput`](#cdktfprovideracmeregistrationpropertyexternalaccountbindinginput) | [`@cdktf/provider-acme.RegistrationExternalAccountBinding`](#@cdktf/provider-acme.RegistrationExternalAccountBinding) | *No description.* |
| [`accountKeyPem`](#cdktfprovideracmeregistrationpropertyaccountkeypem)<span title="Required">*</span> | `string` | *No description.* |
| [`emailAddress`](#cdktfprovideracmeregistrationpropertyemailaddress)<span title="Required">*</span> | `string` | *No description.* |

---

##### `externalAccountBinding`<sup>Required</sup> <a name="@cdktf/provider-acme.Registration.property.externalAccountBinding" id="cdktfprovideracmeregistrationpropertyexternalaccountbinding"></a>

```typescript
public readonly externalAccountBinding: RegistrationExternalAccountBindingOutputReference;
```

- *Type:* [`@cdktf/provider-acme.RegistrationExternalAccountBindingOutputReference`](#@cdktf/provider-acme.RegistrationExternalAccountBindingOutputReference)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-acme.Registration.property.id" id="cdktfprovideracmeregistrationpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `registrationUrl`<sup>Required</sup> <a name="@cdktf/provider-acme.Registration.property.registrationUrl" id="cdktfprovideracmeregistrationpropertyregistrationurl"></a>

```typescript
public readonly registrationUrl: string;
```

- *Type:* `string`

---

##### `accountKeyPemInput`<sup>Optional</sup> <a name="@cdktf/provider-acme.Registration.property.accountKeyPemInput" id="cdktfprovideracmeregistrationpropertyaccountkeypeminput"></a>

```typescript
public readonly accountKeyPemInput: string;
```

- *Type:* `string`

---

##### `emailAddressInput`<sup>Optional</sup> <a name="@cdktf/provider-acme.Registration.property.emailAddressInput" id="cdktfprovideracmeregistrationpropertyemailaddressinput"></a>

```typescript
public readonly emailAddressInput: string;
```

- *Type:* `string`

---

##### `externalAccountBindingInput`<sup>Optional</sup> <a name="@cdktf/provider-acme.Registration.property.externalAccountBindingInput" id="cdktfprovideracmeregistrationpropertyexternalaccountbindinginput"></a>

```typescript
public readonly externalAccountBindingInput: RegistrationExternalAccountBinding;
```

- *Type:* [`@cdktf/provider-acme.RegistrationExternalAccountBinding`](#@cdktf/provider-acme.RegistrationExternalAccountBinding)

---

##### `accountKeyPem`<sup>Required</sup> <a name="@cdktf/provider-acme.Registration.property.accountKeyPem" id="cdktfprovideracmeregistrationpropertyaccountkeypem"></a>

```typescript
public readonly accountKeyPem: string;
```

- *Type:* `string`

---

##### `emailAddress`<sup>Required</sup> <a name="@cdktf/provider-acme.Registration.property.emailAddress" id="cdktfprovideracmeregistrationpropertyemailaddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovideracmeregistrationpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-acme.Registration.property.tfResourceType" id="cdktfprovideracmeregistrationpropertytfresourcetype"></a>

- *Type:* `string`

---

## Structs <a name="Structs" id="structs"></a>

### AcmeProviderConfig <a name="@cdktf/provider-acme.AcmeProviderConfig" id="cdktfprovideracmeacmeproviderconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AcmeProviderConfig } from '@cdktf/provider-acme'

const acmeProviderConfig: AcmeProviderConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`serverUrl`](#cdktfprovideracmeacmeproviderconfigpropertyserverurl)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme#server_url AcmeProvider#server_url}. |
| [`alias`](#cdktfprovideracmeacmeproviderconfigpropertyalias) | `string` | Alias name. |

---

##### `serverUrl`<sup>Required</sup> <a name="@cdktf/provider-acme.AcmeProviderConfig.property.serverUrl" id="cdktfprovideracmeacmeproviderconfigpropertyserverurl"></a>

```typescript
public readonly serverUrl: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme#server_url AcmeProvider#server_url}.

---

##### `alias`<sup>Optional</sup> <a name="@cdktf/provider-acme.AcmeProviderConfig.property.alias" id="cdktfprovideracmeacmeproviderconfigpropertyalias"></a>

```typescript
public readonly alias: string;
```

- *Type:* `string`

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme#alias AcmeProvider#alias}

---

### CertificateConfig <a name="@cdktf/provider-acme.CertificateConfig" id="cdktfprovideracmecertificateconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { CertificateConfig } from '@cdktf/provider-acme'

const certificateConfig: CertificateConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovideracmecertificateconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovideracmecertificateconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovideracmecertificateconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovideracmecertificateconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`accountKeyPem`](#cdktfprovideracmecertificateconfigpropertyaccountkeypem)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#account_key_pem Certificate#account_key_pem}. |
| [`certificateP12Password`](#cdktfprovideracmecertificateconfigpropertycertificatep12password) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#certificate_p12_password Certificate#certificate_p12_password}. |
| [`certificateRequestPem`](#cdktfprovideracmecertificateconfigpropertycertificaterequestpem) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#certificate_request_pem Certificate#certificate_request_pem}. |
| [`commonName`](#cdktfprovideracmecertificateconfigpropertycommonname) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#common_name Certificate#common_name}. |
| [`disableCompletePropagation`](#cdktfprovideracmecertificateconfigpropertydisablecompletepropagation) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#disable_complete_propagation Certificate#disable_complete_propagation}. |
| [`dnsChallenge`](#cdktfprovideracmecertificateconfigpropertydnschallenge) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-acme.CertificateDnsChallenge`](#@cdktf/provider-acme.CertificateDnsChallenge)[] | dns_challenge block. |
| [`httpChallenge`](#cdktfprovideracmecertificateconfigpropertyhttpchallenge) | [`@cdktf/provider-acme.CertificateHttpChallenge`](#@cdktf/provider-acme.CertificateHttpChallenge) | http_challenge block. |
| [`httpMemcachedChallenge`](#cdktfprovideracmecertificateconfigpropertyhttpmemcachedchallenge) | [`@cdktf/provider-acme.CertificateHttpMemcachedChallenge`](#@cdktf/provider-acme.CertificateHttpMemcachedChallenge) | http_memcached_challenge block. |
| [`httpWebrootChallenge`](#cdktfprovideracmecertificateconfigpropertyhttpwebrootchallenge) | [`@cdktf/provider-acme.CertificateHttpWebrootChallenge`](#@cdktf/provider-acme.CertificateHttpWebrootChallenge) | http_webroot_challenge block. |
| [`keyType`](#cdktfprovideracmecertificateconfigpropertykeytype) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#key_type Certificate#key_type}. |
| [`minDaysRemaining`](#cdktfprovideracmecertificateconfigpropertymindaysremaining) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#min_days_remaining Certificate#min_days_remaining}. |
| [`mustStaple`](#cdktfprovideracmecertificateconfigpropertymuststaple) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#must_staple Certificate#must_staple}. |
| [`preCheckDelay`](#cdktfprovideracmecertificateconfigpropertyprecheckdelay) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#pre_check_delay Certificate#pre_check_delay}. |
| [`preferredChain`](#cdktfprovideracmecertificateconfigpropertypreferredchain) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#preferred_chain Certificate#preferred_chain}. |
| [`recursiveNameservers`](#cdktfprovideracmecertificateconfigpropertyrecursivenameservers) | `string`[] | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#recursive_nameservers Certificate#recursive_nameservers}. |
| [`revokeCertificateOnDestroy`](#cdktfprovideracmecertificateconfigpropertyrevokecertificateondestroy) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#revoke_certificate_on_destroy Certificate#revoke_certificate_on_destroy}. |
| [`subjectAlternativeNames`](#cdktfprovideracmecertificateconfigpropertysubjectalternativenames) | `string`[] | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#subject_alternative_names Certificate#subject_alternative_names}. |
| [`tlsChallenge`](#cdktfprovideracmecertificateconfigpropertytlschallenge) | [`@cdktf/provider-acme.CertificateTlsChallenge`](#@cdktf/provider-acme.CertificateTlsChallenge) | tls_challenge block. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateConfig.property.count" id="cdktfprovideracmecertificateconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateConfig.property.dependsOn" id="cdktfprovideracmecertificateconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateConfig.property.lifecycle" id="cdktfprovideracmecertificateconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateConfig.property.provider" id="cdktfprovideracmecertificateconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `accountKeyPem`<sup>Required</sup> <a name="@cdktf/provider-acme.CertificateConfig.property.accountKeyPem" id="cdktfprovideracmecertificateconfigpropertyaccountkeypem"></a>

```typescript
public readonly accountKeyPem: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#account_key_pem Certificate#account_key_pem}.

---

##### `certificateP12Password`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateConfig.property.certificateP12Password" id="cdktfprovideracmecertificateconfigpropertycertificatep12password"></a>

```typescript
public readonly certificateP12Password: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#certificate_p12_password Certificate#certificate_p12_password}.

---

##### `certificateRequestPem`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateConfig.property.certificateRequestPem" id="cdktfprovideracmecertificateconfigpropertycertificaterequestpem"></a>

```typescript
public readonly certificateRequestPem: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#certificate_request_pem Certificate#certificate_request_pem}.

---

##### `commonName`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateConfig.property.commonName" id="cdktfprovideracmecertificateconfigpropertycommonname"></a>

```typescript
public readonly commonName: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#common_name Certificate#common_name}.

---

##### `disableCompletePropagation`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateConfig.property.disableCompletePropagation" id="cdktfprovideracmecertificateconfigpropertydisablecompletepropagation"></a>

```typescript
public readonly disableCompletePropagation: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#disable_complete_propagation Certificate#disable_complete_propagation}.

---

##### `dnsChallenge`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateConfig.property.dnsChallenge" id="cdktfprovideracmecertificateconfigpropertydnschallenge"></a>

```typescript
public readonly dnsChallenge: IResolvable | CertificateDnsChallenge[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-acme.CertificateDnsChallenge`](#@cdktf/provider-acme.CertificateDnsChallenge)[]

dns_challenge block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#dns_challenge Certificate#dns_challenge}

---

##### `httpChallenge`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateConfig.property.httpChallenge" id="cdktfprovideracmecertificateconfigpropertyhttpchallenge"></a>

```typescript
public readonly httpChallenge: CertificateHttpChallenge;
```

- *Type:* [`@cdktf/provider-acme.CertificateHttpChallenge`](#@cdktf/provider-acme.CertificateHttpChallenge)

http_challenge block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#http_challenge Certificate#http_challenge}

---

##### `httpMemcachedChallenge`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateConfig.property.httpMemcachedChallenge" id="cdktfprovideracmecertificateconfigpropertyhttpmemcachedchallenge"></a>

```typescript
public readonly httpMemcachedChallenge: CertificateHttpMemcachedChallenge;
```

- *Type:* [`@cdktf/provider-acme.CertificateHttpMemcachedChallenge`](#@cdktf/provider-acme.CertificateHttpMemcachedChallenge)

http_memcached_challenge block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#http_memcached_challenge Certificate#http_memcached_challenge}

---

##### `httpWebrootChallenge`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateConfig.property.httpWebrootChallenge" id="cdktfprovideracmecertificateconfigpropertyhttpwebrootchallenge"></a>

```typescript
public readonly httpWebrootChallenge: CertificateHttpWebrootChallenge;
```

- *Type:* [`@cdktf/provider-acme.CertificateHttpWebrootChallenge`](#@cdktf/provider-acme.CertificateHttpWebrootChallenge)

http_webroot_challenge block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#http_webroot_challenge Certificate#http_webroot_challenge}

---

##### `keyType`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateConfig.property.keyType" id="cdktfprovideracmecertificateconfigpropertykeytype"></a>

```typescript
public readonly keyType: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#key_type Certificate#key_type}.

---

##### `minDaysRemaining`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateConfig.property.minDaysRemaining" id="cdktfprovideracmecertificateconfigpropertymindaysremaining"></a>

```typescript
public readonly minDaysRemaining: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#min_days_remaining Certificate#min_days_remaining}.

---

##### `mustStaple`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateConfig.property.mustStaple" id="cdktfprovideracmecertificateconfigpropertymuststaple"></a>

```typescript
public readonly mustStaple: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#must_staple Certificate#must_staple}.

---

##### `preCheckDelay`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateConfig.property.preCheckDelay" id="cdktfprovideracmecertificateconfigpropertyprecheckdelay"></a>

```typescript
public readonly preCheckDelay: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#pre_check_delay Certificate#pre_check_delay}.

---

##### `preferredChain`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateConfig.property.preferredChain" id="cdktfprovideracmecertificateconfigpropertypreferredchain"></a>

```typescript
public readonly preferredChain: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#preferred_chain Certificate#preferred_chain}.

---

##### `recursiveNameservers`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateConfig.property.recursiveNameservers" id="cdktfprovideracmecertificateconfigpropertyrecursivenameservers"></a>

```typescript
public readonly recursiveNameservers: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#recursive_nameservers Certificate#recursive_nameservers}.

---

##### `revokeCertificateOnDestroy`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateConfig.property.revokeCertificateOnDestroy" id="cdktfprovideracmecertificateconfigpropertyrevokecertificateondestroy"></a>

```typescript
public readonly revokeCertificateOnDestroy: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#revoke_certificate_on_destroy Certificate#revoke_certificate_on_destroy}.

---

##### `subjectAlternativeNames`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateConfig.property.subjectAlternativeNames" id="cdktfprovideracmecertificateconfigpropertysubjectalternativenames"></a>

```typescript
public readonly subjectAlternativeNames: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#subject_alternative_names Certificate#subject_alternative_names}.

---

##### `tlsChallenge`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateConfig.property.tlsChallenge" id="cdktfprovideracmecertificateconfigpropertytlschallenge"></a>

```typescript
public readonly tlsChallenge: CertificateTlsChallenge;
```

- *Type:* [`@cdktf/provider-acme.CertificateTlsChallenge`](#@cdktf/provider-acme.CertificateTlsChallenge)

tls_challenge block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#tls_challenge Certificate#tls_challenge}

---

### CertificateDnsChallenge <a name="@cdktf/provider-acme.CertificateDnsChallenge" id="cdktfprovideracmecertificatednschallenge"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { CertificateDnsChallenge } from '@cdktf/provider-acme'

const certificateDnsChallenge: CertificateDnsChallenge = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`provider`](#cdktfprovideracmecertificatednschallengepropertyprovider)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#provider Certificate#provider}. |
| [`config`](#cdktfprovideracmecertificatednschallengepropertyconfig) | {[ key: string ]: `string`} | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#config Certificate#config}. |

---

##### `provider`<sup>Required</sup> <a name="@cdktf/provider-acme.CertificateDnsChallenge.property.provider" id="cdktfprovideracmecertificatednschallengepropertyprovider"></a>

```typescript
public readonly provider: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#provider Certificate#provider}.

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateDnsChallenge.property.config" id="cdktfprovideracmecertificatednschallengepropertyconfig"></a>

```typescript
public readonly config: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#config Certificate#config}.

---

### CertificateHttpChallenge <a name="@cdktf/provider-acme.CertificateHttpChallenge" id="cdktfprovideracmecertificatehttpchallenge"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { CertificateHttpChallenge } from '@cdktf/provider-acme'

const certificateHttpChallenge: CertificateHttpChallenge = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`port`](#cdktfprovideracmecertificatehttpchallengepropertyport) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#port Certificate#port}. |
| [`proxyHeader`](#cdktfprovideracmecertificatehttpchallengepropertyproxyheader) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#proxy_header Certificate#proxy_header}. |

---

##### `port`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateHttpChallenge.property.port" id="cdktfprovideracmecertificatehttpchallengepropertyport"></a>

```typescript
public readonly port: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#port Certificate#port}.

---

##### `proxyHeader`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateHttpChallenge.property.proxyHeader" id="cdktfprovideracmecertificatehttpchallengepropertyproxyheader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#proxy_header Certificate#proxy_header}.

---

### CertificateHttpMemcachedChallenge <a name="@cdktf/provider-acme.CertificateHttpMemcachedChallenge" id="cdktfprovideracmecertificatehttpmemcachedchallenge"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { CertificateHttpMemcachedChallenge } from '@cdktf/provider-acme'

const certificateHttpMemcachedChallenge: CertificateHttpMemcachedChallenge = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`hosts`](#cdktfprovideracmecertificatehttpmemcachedchallengepropertyhosts)<span title="Required">*</span> | `string`[] | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#hosts Certificate#hosts}. |

---

##### `hosts`<sup>Required</sup> <a name="@cdktf/provider-acme.CertificateHttpMemcachedChallenge.property.hosts" id="cdktfprovideracmecertificatehttpmemcachedchallengepropertyhosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#hosts Certificate#hosts}.

---

### CertificateHttpWebrootChallenge <a name="@cdktf/provider-acme.CertificateHttpWebrootChallenge" id="cdktfprovideracmecertificatehttpwebrootchallenge"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { CertificateHttpWebrootChallenge } from '@cdktf/provider-acme'

const certificateHttpWebrootChallenge: CertificateHttpWebrootChallenge = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`directory`](#cdktfprovideracmecertificatehttpwebrootchallengepropertydirectory)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#directory Certificate#directory}. |

---

##### `directory`<sup>Required</sup> <a name="@cdktf/provider-acme.CertificateHttpWebrootChallenge.property.directory" id="cdktfprovideracmecertificatehttpwebrootchallengepropertydirectory"></a>

```typescript
public readonly directory: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#directory Certificate#directory}.

---

### CertificateTlsChallenge <a name="@cdktf/provider-acme.CertificateTlsChallenge" id="cdktfprovideracmecertificatetlschallenge"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { CertificateTlsChallenge } from '@cdktf/provider-acme'

const certificateTlsChallenge: CertificateTlsChallenge = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`port`](#cdktfprovideracmecertificatetlschallengepropertyport) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#port Certificate#port}. |

---

##### `port`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateTlsChallenge.property.port" id="cdktfprovideracmecertificatetlschallengepropertyport"></a>

```typescript
public readonly port: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/certificate#port Certificate#port}.

---

### RegistrationConfig <a name="@cdktf/provider-acme.RegistrationConfig" id="cdktfprovideracmeregistrationconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { RegistrationConfig } from '@cdktf/provider-acme'

const registrationConfig: RegistrationConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovideracmeregistrationconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovideracmeregistrationconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovideracmeregistrationconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovideracmeregistrationconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`accountKeyPem`](#cdktfprovideracmeregistrationconfigpropertyaccountkeypem)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/registration#account_key_pem Registration#account_key_pem}. |
| [`emailAddress`](#cdktfprovideracmeregistrationconfigpropertyemailaddress)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/registration#email_address Registration#email_address}. |
| [`externalAccountBinding`](#cdktfprovideracmeregistrationconfigpropertyexternalaccountbinding) | [`@cdktf/provider-acme.RegistrationExternalAccountBinding`](#@cdktf/provider-acme.RegistrationExternalAccountBinding) | external_account_binding block. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-acme.RegistrationConfig.property.count" id="cdktfprovideracmeregistrationconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-acme.RegistrationConfig.property.dependsOn" id="cdktfprovideracmeregistrationconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-acme.RegistrationConfig.property.lifecycle" id="cdktfprovideracmeregistrationconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-acme.RegistrationConfig.property.provider" id="cdktfprovideracmeregistrationconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `accountKeyPem`<sup>Required</sup> <a name="@cdktf/provider-acme.RegistrationConfig.property.accountKeyPem" id="cdktfprovideracmeregistrationconfigpropertyaccountkeypem"></a>

```typescript
public readonly accountKeyPem: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/registration#account_key_pem Registration#account_key_pem}.

---

##### `emailAddress`<sup>Required</sup> <a name="@cdktf/provider-acme.RegistrationConfig.property.emailAddress" id="cdktfprovideracmeregistrationconfigpropertyemailaddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/registration#email_address Registration#email_address}.

---

##### `externalAccountBinding`<sup>Optional</sup> <a name="@cdktf/provider-acme.RegistrationConfig.property.externalAccountBinding" id="cdktfprovideracmeregistrationconfigpropertyexternalaccountbinding"></a>

```typescript
public readonly externalAccountBinding: RegistrationExternalAccountBinding;
```

- *Type:* [`@cdktf/provider-acme.RegistrationExternalAccountBinding`](#@cdktf/provider-acme.RegistrationExternalAccountBinding)

external_account_binding block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/registration#external_account_binding Registration#external_account_binding}

---

### RegistrationExternalAccountBinding <a name="@cdktf/provider-acme.RegistrationExternalAccountBinding" id="cdktfprovideracmeregistrationexternalaccountbinding"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { RegistrationExternalAccountBinding } from '@cdktf/provider-acme'

const registrationExternalAccountBinding: RegistrationExternalAccountBinding = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`hmacBase64`](#cdktfprovideracmeregistrationexternalaccountbindingpropertyhmacbase64)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/registration#hmac_base64 Registration#hmac_base64}. |
| [`keyId`](#cdktfprovideracmeregistrationexternalaccountbindingpropertykeyid)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/registration#key_id Registration#key_id}. |

---

##### `hmacBase64`<sup>Required</sup> <a name="@cdktf/provider-acme.RegistrationExternalAccountBinding.property.hmacBase64" id="cdktfprovideracmeregistrationexternalaccountbindingpropertyhmacbase64"></a>

```typescript
public readonly hmacBase64: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/registration#hmac_base64 Registration#hmac_base64}.

---

##### `keyId`<sup>Required</sup> <a name="@cdktf/provider-acme.RegistrationExternalAccountBinding.property.keyId" id="cdktfprovideracmeregistrationexternalaccountbindingpropertykeyid"></a>

```typescript
public readonly keyId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/acme/r/registration#key_id Registration#key_id}.

---

## Classes <a name="Classes" id="classes"></a>

### CertificateHttpChallengeOutputReference <a name="@cdktf/provider-acme.CertificateHttpChallengeOutputReference" id="cdktfprovideracmecertificatehttpchallengeoutputreference"></a>

#### Initializers <a name="@cdktf/provider-acme.CertificateHttpChallengeOutputReference.Initializer" id="cdktfprovideracmecertificatehttpchallengeoutputreferenceinitializer"></a>

```typescript
import { CertificateHttpChallengeOutputReference } from '@cdktf/provider-acme'

new CertificateHttpChallengeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovideracmecertificatehttpchallengeoutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovideracmecertificatehttpchallengeoutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-acme.CertificateHttpChallengeOutputReference.parameter.terraformResource" id="cdktfprovideracmecertificatehttpchallengeoutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-acme.CertificateHttpChallengeOutputReference.parameter.terraformAttribute" id="cdktfprovideracmecertificatehttpchallengeoutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetPort`](#cdktfprovideracmecertificatehttpchallengeoutputreferenceresetport) | *No description.* |
| [`resetProxyHeader`](#cdktfprovideracmecertificatehttpchallengeoutputreferenceresetproxyheader) | *No description.* |

---

##### `resetPort` <a name="@cdktf/provider-acme.CertificateHttpChallengeOutputReference.resetPort" id="cdktfprovideracmecertificatehttpchallengeoutputreferenceresetport"></a>

```typescript
public resetPort()
```

##### `resetProxyHeader` <a name="@cdktf/provider-acme.CertificateHttpChallengeOutputReference.resetProxyHeader" id="cdktfprovideracmecertificatehttpchallengeoutputreferenceresetproxyheader"></a>

```typescript
public resetProxyHeader()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`portInput`](#cdktfprovideracmecertificatehttpchallengeoutputreferencepropertyportinput) | `number` | *No description.* |
| [`proxyHeaderInput`](#cdktfprovideracmecertificatehttpchallengeoutputreferencepropertyproxyheaderinput) | `string` | *No description.* |
| [`port`](#cdktfprovideracmecertificatehttpchallengeoutputreferencepropertyport)<span title="Required">*</span> | `number` | *No description.* |
| [`proxyHeader`](#cdktfprovideracmecertificatehttpchallengeoutputreferencepropertyproxyheader)<span title="Required">*</span> | `string` | *No description.* |
| [`internalValue`](#cdktfprovideracmecertificatehttpchallengeoutputreferencepropertyinternalvalue) | [`@cdktf/provider-acme.CertificateHttpChallenge`](#@cdktf/provider-acme.CertificateHttpChallenge) | *No description.* |

---

##### `portInput`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateHttpChallengeOutputReference.property.portInput" id="cdktfprovideracmecertificatehttpchallengeoutputreferencepropertyportinput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* `number`

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateHttpChallengeOutputReference.property.proxyHeaderInput" id="cdktfprovideracmecertificatehttpchallengeoutputreferencepropertyproxyheaderinput"></a>

```typescript
public readonly proxyHeaderInput: string;
```

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="@cdktf/provider-acme.CertificateHttpChallengeOutputReference.property.port" id="cdktfprovideracmecertificatehttpchallengeoutputreferencepropertyport"></a>

```typescript
public readonly port: number;
```

- *Type:* `number`

---

##### `proxyHeader`<sup>Required</sup> <a name="@cdktf/provider-acme.CertificateHttpChallengeOutputReference.property.proxyHeader" id="cdktfprovideracmecertificatehttpchallengeoutputreferencepropertyproxyheader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateHttpChallengeOutputReference.property.internalValue" id="cdktfprovideracmecertificatehttpchallengeoutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: CertificateHttpChallenge;
```

- *Type:* [`@cdktf/provider-acme.CertificateHttpChallenge`](#@cdktf/provider-acme.CertificateHttpChallenge)

---


### CertificateHttpMemcachedChallengeOutputReference <a name="@cdktf/provider-acme.CertificateHttpMemcachedChallengeOutputReference" id="cdktfprovideracmecertificatehttpmemcachedchallengeoutputreference"></a>

#### Initializers <a name="@cdktf/provider-acme.CertificateHttpMemcachedChallengeOutputReference.Initializer" id="cdktfprovideracmecertificatehttpmemcachedchallengeoutputreferenceinitializer"></a>

```typescript
import { CertificateHttpMemcachedChallengeOutputReference } from '@cdktf/provider-acme'

new CertificateHttpMemcachedChallengeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovideracmecertificatehttpmemcachedchallengeoutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovideracmecertificatehttpmemcachedchallengeoutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-acme.CertificateHttpMemcachedChallengeOutputReference.parameter.terraformResource" id="cdktfprovideracmecertificatehttpmemcachedchallengeoutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-acme.CertificateHttpMemcachedChallengeOutputReference.parameter.terraformAttribute" id="cdktfprovideracmecertificatehttpmemcachedchallengeoutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`hostsInput`](#cdktfprovideracmecertificatehttpmemcachedchallengeoutputreferencepropertyhostsinput) | `string`[] | *No description.* |
| [`hosts`](#cdktfprovideracmecertificatehttpmemcachedchallengeoutputreferencepropertyhosts)<span title="Required">*</span> | `string`[] | *No description.* |
| [`internalValue`](#cdktfprovideracmecertificatehttpmemcachedchallengeoutputreferencepropertyinternalvalue) | [`@cdktf/provider-acme.CertificateHttpMemcachedChallenge`](#@cdktf/provider-acme.CertificateHttpMemcachedChallenge) | *No description.* |

---

##### `hostsInput`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateHttpMemcachedChallengeOutputReference.property.hostsInput" id="cdktfprovideracmecertificatehttpmemcachedchallengeoutputreferencepropertyhostsinput"></a>

```typescript
public readonly hostsInput: string[];
```

- *Type:* `string`[]

---

##### `hosts`<sup>Required</sup> <a name="@cdktf/provider-acme.CertificateHttpMemcachedChallengeOutputReference.property.hosts" id="cdktfprovideracmecertificatehttpmemcachedchallengeoutputreferencepropertyhosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* `string`[]

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateHttpMemcachedChallengeOutputReference.property.internalValue" id="cdktfprovideracmecertificatehttpmemcachedchallengeoutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: CertificateHttpMemcachedChallenge;
```

- *Type:* [`@cdktf/provider-acme.CertificateHttpMemcachedChallenge`](#@cdktf/provider-acme.CertificateHttpMemcachedChallenge)

---


### CertificateHttpWebrootChallengeOutputReference <a name="@cdktf/provider-acme.CertificateHttpWebrootChallengeOutputReference" id="cdktfprovideracmecertificatehttpwebrootchallengeoutputreference"></a>

#### Initializers <a name="@cdktf/provider-acme.CertificateHttpWebrootChallengeOutputReference.Initializer" id="cdktfprovideracmecertificatehttpwebrootchallengeoutputreferenceinitializer"></a>

```typescript
import { CertificateHttpWebrootChallengeOutputReference } from '@cdktf/provider-acme'

new CertificateHttpWebrootChallengeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovideracmecertificatehttpwebrootchallengeoutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovideracmecertificatehttpwebrootchallengeoutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-acme.CertificateHttpWebrootChallengeOutputReference.parameter.terraformResource" id="cdktfprovideracmecertificatehttpwebrootchallengeoutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-acme.CertificateHttpWebrootChallengeOutputReference.parameter.terraformAttribute" id="cdktfprovideracmecertificatehttpwebrootchallengeoutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`directoryInput`](#cdktfprovideracmecertificatehttpwebrootchallengeoutputreferencepropertydirectoryinput) | `string` | *No description.* |
| [`directory`](#cdktfprovideracmecertificatehttpwebrootchallengeoutputreferencepropertydirectory)<span title="Required">*</span> | `string` | *No description.* |
| [`internalValue`](#cdktfprovideracmecertificatehttpwebrootchallengeoutputreferencepropertyinternalvalue) | [`@cdktf/provider-acme.CertificateHttpWebrootChallenge`](#@cdktf/provider-acme.CertificateHttpWebrootChallenge) | *No description.* |

---

##### `directoryInput`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateHttpWebrootChallengeOutputReference.property.directoryInput" id="cdktfprovideracmecertificatehttpwebrootchallengeoutputreferencepropertydirectoryinput"></a>

```typescript
public readonly directoryInput: string;
```

- *Type:* `string`

---

##### `directory`<sup>Required</sup> <a name="@cdktf/provider-acme.CertificateHttpWebrootChallengeOutputReference.property.directory" id="cdktfprovideracmecertificatehttpwebrootchallengeoutputreferencepropertydirectory"></a>

```typescript
public readonly directory: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateHttpWebrootChallengeOutputReference.property.internalValue" id="cdktfprovideracmecertificatehttpwebrootchallengeoutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: CertificateHttpWebrootChallenge;
```

- *Type:* [`@cdktf/provider-acme.CertificateHttpWebrootChallenge`](#@cdktf/provider-acme.CertificateHttpWebrootChallenge)

---


### CertificateTlsChallengeOutputReference <a name="@cdktf/provider-acme.CertificateTlsChallengeOutputReference" id="cdktfprovideracmecertificatetlschallengeoutputreference"></a>

#### Initializers <a name="@cdktf/provider-acme.CertificateTlsChallengeOutputReference.Initializer" id="cdktfprovideracmecertificatetlschallengeoutputreferenceinitializer"></a>

```typescript
import { CertificateTlsChallengeOutputReference } from '@cdktf/provider-acme'

new CertificateTlsChallengeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovideracmecertificatetlschallengeoutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovideracmecertificatetlschallengeoutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-acme.CertificateTlsChallengeOutputReference.parameter.terraformResource" id="cdktfprovideracmecertificatetlschallengeoutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-acme.CertificateTlsChallengeOutputReference.parameter.terraformAttribute" id="cdktfprovideracmecertificatetlschallengeoutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetPort`](#cdktfprovideracmecertificatetlschallengeoutputreferenceresetport) | *No description.* |

---

##### `resetPort` <a name="@cdktf/provider-acme.CertificateTlsChallengeOutputReference.resetPort" id="cdktfprovideracmecertificatetlschallengeoutputreferenceresetport"></a>

```typescript
public resetPort()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`portInput`](#cdktfprovideracmecertificatetlschallengeoutputreferencepropertyportinput) | `number` | *No description.* |
| [`port`](#cdktfprovideracmecertificatetlschallengeoutputreferencepropertyport)<span title="Required">*</span> | `number` | *No description.* |
| [`internalValue`](#cdktfprovideracmecertificatetlschallengeoutputreferencepropertyinternalvalue) | [`@cdktf/provider-acme.CertificateTlsChallenge`](#@cdktf/provider-acme.CertificateTlsChallenge) | *No description.* |

---

##### `portInput`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateTlsChallengeOutputReference.property.portInput" id="cdktfprovideracmecertificatetlschallengeoutputreferencepropertyportinput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* `number`

---

##### `port`<sup>Required</sup> <a name="@cdktf/provider-acme.CertificateTlsChallengeOutputReference.property.port" id="cdktfprovideracmecertificatetlschallengeoutputreferencepropertyport"></a>

```typescript
public readonly port: number;
```

- *Type:* `number`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-acme.CertificateTlsChallengeOutputReference.property.internalValue" id="cdktfprovideracmecertificatetlschallengeoutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: CertificateTlsChallenge;
```

- *Type:* [`@cdktf/provider-acme.CertificateTlsChallenge`](#@cdktf/provider-acme.CertificateTlsChallenge)

---


### RegistrationExternalAccountBindingOutputReference <a name="@cdktf/provider-acme.RegistrationExternalAccountBindingOutputReference" id="cdktfprovideracmeregistrationexternalaccountbindingoutputreference"></a>

#### Initializers <a name="@cdktf/provider-acme.RegistrationExternalAccountBindingOutputReference.Initializer" id="cdktfprovideracmeregistrationexternalaccountbindingoutputreferenceinitializer"></a>

```typescript
import { RegistrationExternalAccountBindingOutputReference } from '@cdktf/provider-acme'

new RegistrationExternalAccountBindingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovideracmeregistrationexternalaccountbindingoutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovideracmeregistrationexternalaccountbindingoutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-acme.RegistrationExternalAccountBindingOutputReference.parameter.terraformResource" id="cdktfprovideracmeregistrationexternalaccountbindingoutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-acme.RegistrationExternalAccountBindingOutputReference.parameter.terraformAttribute" id="cdktfprovideracmeregistrationexternalaccountbindingoutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`hmacBase64Input`](#cdktfprovideracmeregistrationexternalaccountbindingoutputreferencepropertyhmacbase64input) | `string` | *No description.* |
| [`keyIdInput`](#cdktfprovideracmeregistrationexternalaccountbindingoutputreferencepropertykeyidinput) | `string` | *No description.* |
| [`hmacBase64`](#cdktfprovideracmeregistrationexternalaccountbindingoutputreferencepropertyhmacbase64)<span title="Required">*</span> | `string` | *No description.* |
| [`keyId`](#cdktfprovideracmeregistrationexternalaccountbindingoutputreferencepropertykeyid)<span title="Required">*</span> | `string` | *No description.* |
| [`internalValue`](#cdktfprovideracmeregistrationexternalaccountbindingoutputreferencepropertyinternalvalue) | [`@cdktf/provider-acme.RegistrationExternalAccountBinding`](#@cdktf/provider-acme.RegistrationExternalAccountBinding) | *No description.* |

---

##### `hmacBase64Input`<sup>Optional</sup> <a name="@cdktf/provider-acme.RegistrationExternalAccountBindingOutputReference.property.hmacBase64Input" id="cdktfprovideracmeregistrationexternalaccountbindingoutputreferencepropertyhmacbase64input"></a>

```typescript
public readonly hmacBase64Input: string;
```

- *Type:* `string`

---

##### `keyIdInput`<sup>Optional</sup> <a name="@cdktf/provider-acme.RegistrationExternalAccountBindingOutputReference.property.keyIdInput" id="cdktfprovideracmeregistrationexternalaccountbindingoutputreferencepropertykeyidinput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* `string`

---

##### `hmacBase64`<sup>Required</sup> <a name="@cdktf/provider-acme.RegistrationExternalAccountBindingOutputReference.property.hmacBase64" id="cdktfprovideracmeregistrationexternalaccountbindingoutputreferencepropertyhmacbase64"></a>

```typescript
public readonly hmacBase64: string;
```

- *Type:* `string`

---

##### `keyId`<sup>Required</sup> <a name="@cdktf/provider-acme.RegistrationExternalAccountBindingOutputReference.property.keyId" id="cdktfprovideracmeregistrationexternalaccountbindingoutputreferencepropertykeyid"></a>

```typescript
public readonly keyId: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-acme.RegistrationExternalAccountBindingOutputReference.property.internalValue" id="cdktfprovideracmeregistrationexternalaccountbindingoutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: RegistrationExternalAccountBinding;
```

- *Type:* [`@cdktf/provider-acme.RegistrationExternalAccountBinding`](#@cdktf/provider-acme.RegistrationExternalAccountBinding)

---



