# `certificate` Submodule <a name="`certificate` Submodule" id="@cdktf/provider-acme.certificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Certificate <a name="Certificate" id="@cdktf/provider-acme.certificate.Certificate"></a>

Represents a {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate acme_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.Certificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.acme.certificate.Certificate;

Certificate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accountKeyPem(java.lang.String)
//  .certificateP12Password(java.lang.String)
//  .certificateRequestPem(java.lang.String)
//  .certTimeout(java.lang.Number)
//  .commonName(java.lang.String)
//  .disableCompletePropagation(java.lang.Boolean)
//  .disableCompletePropagation(IResolvable)
//  .dnsChallenge(IResolvable)
//  .dnsChallenge(java.util.List<CertificateDnsChallenge>)
//  .httpChallenge(CertificateHttpChallenge)
//  .httpMemcachedChallenge(CertificateHttpMemcachedChallenge)
//  .httpS3Challenge(CertificateHttpS3Challenge)
//  .httpWebrootChallenge(CertificateHttpWebrootChallenge)
//  .id(java.lang.String)
//  .keyType(java.lang.String)
//  .minDaysRemaining(java.lang.Number)
//  .mustStaple(java.lang.Boolean)
//  .mustStaple(IResolvable)
//  .preCheckDelay(java.lang.Number)
//  .preferredChain(java.lang.String)
//  .recursiveNameservers(java.util.List<java.lang.String>)
//  .revokeCertificateOnDestroy(java.lang.Boolean)
//  .revokeCertificateOnDestroy(IResolvable)
//  .revokeCertificateReason(java.lang.String)
//  .subjectAlternativeNames(java.util.List<java.lang.String>)
//  .tlsChallenge(CertificateTlsChallenge)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.accountKeyPem">accountKeyPem</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#account_key_pem Certificate#account_key_pem}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.certificateP12Password">certificateP12Password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#certificate_p12_password Certificate#certificate_p12_password}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.certificateRequestPem">certificateRequestPem</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#certificate_request_pem Certificate#certificate_request_pem}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.certTimeout">certTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#cert_timeout Certificate#cert_timeout}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.commonName">commonName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#common_name Certificate#common_name}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.disableCompletePropagation">disableCompletePropagation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#disable_complete_propagation Certificate#disable_complete_propagation}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.dnsChallenge">dnsChallenge</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a>></code> | dns_challenge block. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.httpChallenge">httpChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a></code> | http_challenge block. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.httpMemcachedChallenge">httpMemcachedChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a></code> | http_memcached_challenge block. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.httpS3Challenge">httpS3Challenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3Challenge">CertificateHttpS3Challenge</a></code> | http_s3_challenge block. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.httpWebrootChallenge">httpWebrootChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a></code> | http_webroot_challenge block. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#id Certificate#id}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.keyType">keyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#key_type Certificate#key_type}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.minDaysRemaining">minDaysRemaining</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#min_days_remaining Certificate#min_days_remaining}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.mustStaple">mustStaple</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#must_staple Certificate#must_staple}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.preCheckDelay">preCheckDelay</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#pre_check_delay Certificate#pre_check_delay}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.preferredChain">preferredChain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#preferred_chain Certificate#preferred_chain}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.recursiveNameservers">recursiveNameservers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#recursive_nameservers Certificate#recursive_nameservers}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.revokeCertificateOnDestroy">revokeCertificateOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#revoke_certificate_on_destroy Certificate#revoke_certificate_on_destroy}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.revokeCertificateReason">revokeCertificateReason</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#revoke_certificate_reason Certificate#revoke_certificate_reason}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#subject_alternative_names Certificate#subject_alternative_names}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.tlsChallenge">tlsChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a></code> | tls_challenge block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountKeyPem`<sup>Required</sup> <a name="accountKeyPem" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.accountKeyPem"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#account_key_pem Certificate#account_key_pem}.

---

##### `certificateP12Password`<sup>Optional</sup> <a name="certificateP12Password" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.certificateP12Password"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#certificate_p12_password Certificate#certificate_p12_password}.

---

##### `certificateRequestPem`<sup>Optional</sup> <a name="certificateRequestPem" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.certificateRequestPem"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#certificate_request_pem Certificate#certificate_request_pem}.

---

##### `certTimeout`<sup>Optional</sup> <a name="certTimeout" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.certTimeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#cert_timeout Certificate#cert_timeout}.

---

##### `commonName`<sup>Optional</sup> <a name="commonName" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.commonName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#common_name Certificate#common_name}.

---

##### `disableCompletePropagation`<sup>Optional</sup> <a name="disableCompletePropagation" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.disableCompletePropagation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#disable_complete_propagation Certificate#disable_complete_propagation}.

---

##### `dnsChallenge`<sup>Optional</sup> <a name="dnsChallenge" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.dnsChallenge"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a>>

dns_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#dns_challenge Certificate#dns_challenge}

---

##### `httpChallenge`<sup>Optional</sup> <a name="httpChallenge" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.httpChallenge"></a>

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a>

http_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#http_challenge Certificate#http_challenge}

---

##### `httpMemcachedChallenge`<sup>Optional</sup> <a name="httpMemcachedChallenge" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.httpMemcachedChallenge"></a>

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a>

http_memcached_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#http_memcached_challenge Certificate#http_memcached_challenge}

---

##### `httpS3Challenge`<sup>Optional</sup> <a name="httpS3Challenge" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.httpS3Challenge"></a>

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpS3Challenge">CertificateHttpS3Challenge</a>

http_s3_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#http_s3_challenge Certificate#http_s3_challenge}

---

##### `httpWebrootChallenge`<sup>Optional</sup> <a name="httpWebrootChallenge" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.httpWebrootChallenge"></a>

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a>

http_webroot_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#http_webroot_challenge Certificate#http_webroot_challenge}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#id Certificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.keyType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#key_type Certificate#key_type}.

---

##### `minDaysRemaining`<sup>Optional</sup> <a name="minDaysRemaining" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.minDaysRemaining"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#min_days_remaining Certificate#min_days_remaining}.

---

##### `mustStaple`<sup>Optional</sup> <a name="mustStaple" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.mustStaple"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#must_staple Certificate#must_staple}.

---

##### `preCheckDelay`<sup>Optional</sup> <a name="preCheckDelay" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.preCheckDelay"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#pre_check_delay Certificate#pre_check_delay}.

---

##### `preferredChain`<sup>Optional</sup> <a name="preferredChain" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.preferredChain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#preferred_chain Certificate#preferred_chain}.

---

##### `recursiveNameservers`<sup>Optional</sup> <a name="recursiveNameservers" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.recursiveNameservers"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#recursive_nameservers Certificate#recursive_nameservers}.

---

##### `revokeCertificateOnDestroy`<sup>Optional</sup> <a name="revokeCertificateOnDestroy" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.revokeCertificateOnDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#revoke_certificate_on_destroy Certificate#revoke_certificate_on_destroy}.

---

##### `revokeCertificateReason`<sup>Optional</sup> <a name="revokeCertificateReason" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.revokeCertificateReason"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#revoke_certificate_reason Certificate#revoke_certificate_reason}.

---

##### `subjectAlternativeNames`<sup>Optional</sup> <a name="subjectAlternativeNames" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.subjectAlternativeNames"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#subject_alternative_names Certificate#subject_alternative_names}.

---

##### `tlsChallenge`<sup>Optional</sup> <a name="tlsChallenge" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.tlsChallenge"></a>

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a>

tls_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#tls_challenge Certificate#tls_challenge}

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
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.putDnsChallenge">putDnsChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.putHttpChallenge">putHttpChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.putHttpMemcachedChallenge">putHttpMemcachedChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.putHttpS3Challenge">putHttpS3Challenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.putHttpWebrootChallenge">putHttpWebrootChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.putTlsChallenge">putTlsChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetCertificateP12Password">resetCertificateP12Password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetCertificateRequestPem">resetCertificateRequestPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetCertTimeout">resetCertTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetCommonName">resetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetDisableCompletePropagation">resetDisableCompletePropagation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetDnsChallenge">resetDnsChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetHttpChallenge">resetHttpChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetHttpMemcachedChallenge">resetHttpMemcachedChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetHttpS3Challenge">resetHttpS3Challenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetHttpWebrootChallenge">resetHttpWebrootChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetKeyType">resetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetMinDaysRemaining">resetMinDaysRemaining</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetMustStaple">resetMustStaple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetPreCheckDelay">resetPreCheckDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetPreferredChain">resetPreferredChain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetRecursiveNameservers">resetRecursiveNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetRevokeCertificateOnDestroy">resetRevokeCertificateOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetRevokeCertificateReason">resetRevokeCertificateReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetSubjectAlternativeNames">resetSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetTlsChallenge">resetTlsChallenge</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-acme.certificate.Certificate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-acme.certificate.Certificate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-acme.certificate.Certificate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-acme.certificate.Certificate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-acme.certificate.Certificate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-acme.certificate.Certificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-acme.certificate.Certificate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-acme.certificate.Certificate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-acme.certificate.Certificate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-acme.certificate.Certificate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-acme.certificate.Certificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-acme.certificate.Certificate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-acme.certificate.Certificate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-acme.certificate.Certificate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-acme.certificate.Certificate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-acme.certificate.Certificate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-acme.certificate.Certificate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-acme.certificate.Certificate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-acme.certificate.Certificate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-acme.certificate.Certificate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-acme.certificate.Certificate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-acme.certificate.Certificate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-acme.certificate.Certificate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-acme.certificate.Certificate.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-acme.certificate.Certificate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.Certificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-acme.certificate.Certificate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-acme.certificate.Certificate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-acme.certificate.Certificate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-acme.certificate.Certificate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-acme.certificate.Certificate.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-acme.certificate.Certificate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-acme.certificate.Certificate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDnsChallenge` <a name="putDnsChallenge" id="@cdktf/provider-acme.certificate.Certificate.putDnsChallenge"></a>

```java
public void putDnsChallenge(IResolvable OR java.util.List<CertificateDnsChallenge> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-acme.certificate.Certificate.putDnsChallenge.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a>>

---

##### `putHttpChallenge` <a name="putHttpChallenge" id="@cdktf/provider-acme.certificate.Certificate.putHttpChallenge"></a>

```java
public void putHttpChallenge(CertificateHttpChallenge value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-acme.certificate.Certificate.putHttpChallenge.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a>

---

##### `putHttpMemcachedChallenge` <a name="putHttpMemcachedChallenge" id="@cdktf/provider-acme.certificate.Certificate.putHttpMemcachedChallenge"></a>

```java
public void putHttpMemcachedChallenge(CertificateHttpMemcachedChallenge value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-acme.certificate.Certificate.putHttpMemcachedChallenge.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a>

---

##### `putHttpS3Challenge` <a name="putHttpS3Challenge" id="@cdktf/provider-acme.certificate.Certificate.putHttpS3Challenge"></a>

```java
public void putHttpS3Challenge(CertificateHttpS3Challenge value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-acme.certificate.Certificate.putHttpS3Challenge.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpS3Challenge">CertificateHttpS3Challenge</a>

---

##### `putHttpWebrootChallenge` <a name="putHttpWebrootChallenge" id="@cdktf/provider-acme.certificate.Certificate.putHttpWebrootChallenge"></a>

```java
public void putHttpWebrootChallenge(CertificateHttpWebrootChallenge value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-acme.certificate.Certificate.putHttpWebrootChallenge.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a>

---

##### `putTlsChallenge` <a name="putTlsChallenge" id="@cdktf/provider-acme.certificate.Certificate.putTlsChallenge"></a>

```java
public void putTlsChallenge(CertificateTlsChallenge value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-acme.certificate.Certificate.putTlsChallenge.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a>

---

##### `resetCertificateP12Password` <a name="resetCertificateP12Password" id="@cdktf/provider-acme.certificate.Certificate.resetCertificateP12Password"></a>

```java
public void resetCertificateP12Password()
```

##### `resetCertificateRequestPem` <a name="resetCertificateRequestPem" id="@cdktf/provider-acme.certificate.Certificate.resetCertificateRequestPem"></a>

```java
public void resetCertificateRequestPem()
```

##### `resetCertTimeout` <a name="resetCertTimeout" id="@cdktf/provider-acme.certificate.Certificate.resetCertTimeout"></a>

```java
public void resetCertTimeout()
```

##### `resetCommonName` <a name="resetCommonName" id="@cdktf/provider-acme.certificate.Certificate.resetCommonName"></a>

```java
public void resetCommonName()
```

##### `resetDisableCompletePropagation` <a name="resetDisableCompletePropagation" id="@cdktf/provider-acme.certificate.Certificate.resetDisableCompletePropagation"></a>

```java
public void resetDisableCompletePropagation()
```

##### `resetDnsChallenge` <a name="resetDnsChallenge" id="@cdktf/provider-acme.certificate.Certificate.resetDnsChallenge"></a>

```java
public void resetDnsChallenge()
```

##### `resetHttpChallenge` <a name="resetHttpChallenge" id="@cdktf/provider-acme.certificate.Certificate.resetHttpChallenge"></a>

```java
public void resetHttpChallenge()
```

##### `resetHttpMemcachedChallenge` <a name="resetHttpMemcachedChallenge" id="@cdktf/provider-acme.certificate.Certificate.resetHttpMemcachedChallenge"></a>

```java
public void resetHttpMemcachedChallenge()
```

##### `resetHttpS3Challenge` <a name="resetHttpS3Challenge" id="@cdktf/provider-acme.certificate.Certificate.resetHttpS3Challenge"></a>

```java
public void resetHttpS3Challenge()
```

##### `resetHttpWebrootChallenge` <a name="resetHttpWebrootChallenge" id="@cdktf/provider-acme.certificate.Certificate.resetHttpWebrootChallenge"></a>

```java
public void resetHttpWebrootChallenge()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-acme.certificate.Certificate.resetId"></a>

```java
public void resetId()
```

##### `resetKeyType` <a name="resetKeyType" id="@cdktf/provider-acme.certificate.Certificate.resetKeyType"></a>

```java
public void resetKeyType()
```

##### `resetMinDaysRemaining` <a name="resetMinDaysRemaining" id="@cdktf/provider-acme.certificate.Certificate.resetMinDaysRemaining"></a>

```java
public void resetMinDaysRemaining()
```

##### `resetMustStaple` <a name="resetMustStaple" id="@cdktf/provider-acme.certificate.Certificate.resetMustStaple"></a>

```java
public void resetMustStaple()
```

##### `resetPreCheckDelay` <a name="resetPreCheckDelay" id="@cdktf/provider-acme.certificate.Certificate.resetPreCheckDelay"></a>

```java
public void resetPreCheckDelay()
```

##### `resetPreferredChain` <a name="resetPreferredChain" id="@cdktf/provider-acme.certificate.Certificate.resetPreferredChain"></a>

```java
public void resetPreferredChain()
```

##### `resetRecursiveNameservers` <a name="resetRecursiveNameservers" id="@cdktf/provider-acme.certificate.Certificate.resetRecursiveNameservers"></a>

```java
public void resetRecursiveNameservers()
```

##### `resetRevokeCertificateOnDestroy` <a name="resetRevokeCertificateOnDestroy" id="@cdktf/provider-acme.certificate.Certificate.resetRevokeCertificateOnDestroy"></a>

```java
public void resetRevokeCertificateOnDestroy()
```

##### `resetRevokeCertificateReason` <a name="resetRevokeCertificateReason" id="@cdktf/provider-acme.certificate.Certificate.resetRevokeCertificateReason"></a>

```java
public void resetRevokeCertificateReason()
```

##### `resetSubjectAlternativeNames` <a name="resetSubjectAlternativeNames" id="@cdktf/provider-acme.certificate.Certificate.resetSubjectAlternativeNames"></a>

```java
public void resetSubjectAlternativeNames()
```

##### `resetTlsChallenge` <a name="resetTlsChallenge" id="@cdktf/provider-acme.certificate.Certificate.resetTlsChallenge"></a>

```java
public void resetTlsChallenge()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Certificate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-acme.certificate.Certificate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.acme.certificate.Certificate;

Certificate.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-acme.certificate.Certificate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.acme.certificate.Certificate;

Certificate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-acme.certificate.Certificate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-acme.certificate.Certificate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.acme.certificate.Certificate;

Certificate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-acme.certificate.Certificate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-acme.certificate.Certificate.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.acme.certificate.Certificate;

Certificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Certificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Certificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-acme.certificate.Certificate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-acme.certificate.Certificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Certificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-acme.certificate.Certificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Certificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-acme.certificate.Certificate.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Certificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateDomain">certificateDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateNotAfter">certificateNotAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateP12">certificateP12</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificatePem">certificatePem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateUrl">certificateUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.dnsChallenge">dnsChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList">CertificateDnsChallengeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpChallenge">httpChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference">CertificateHttpChallengeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpMemcachedChallenge">httpMemcachedChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference">CertificateHttpMemcachedChallengeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpS3Challenge">httpS3Challenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference">CertificateHttpS3ChallengeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpWebrootChallenge">httpWebrootChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference">CertificateHttpWebrootChallengeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.issuerPem">issuerPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.privateKeyPem">privateKeyPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.tlsChallenge">tlsChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference">CertificateTlsChallengeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.accountKeyPemInput">accountKeyPemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateP12PasswordInput">certificateP12PasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateRequestPemInput">certificateRequestPemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certTimeoutInput">certTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.commonNameInput">commonNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.disableCompletePropagationInput">disableCompletePropagationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.dnsChallengeInput">dnsChallengeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpChallengeInput">httpChallengeInput</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpMemcachedChallengeInput">httpMemcachedChallengeInput</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpS3ChallengeInput">httpS3ChallengeInput</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3Challenge">CertificateHttpS3Challenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpWebrootChallengeInput">httpWebrootChallengeInput</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.keyTypeInput">keyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.minDaysRemainingInput">minDaysRemainingInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.mustStapleInput">mustStapleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.preCheckDelayInput">preCheckDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.preferredChainInput">preferredChainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.recursiveNameserversInput">recursiveNameserversInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.revokeCertificateOnDestroyInput">revokeCertificateOnDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.revokeCertificateReasonInput">revokeCertificateReasonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.subjectAlternativeNamesInput">subjectAlternativeNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.tlsChallengeInput">tlsChallengeInput</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.accountKeyPem">accountKeyPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateP12Password">certificateP12Password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateRequestPem">certificateRequestPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certTimeout">certTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.commonName">commonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.disableCompletePropagation">disableCompletePropagation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.keyType">keyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.minDaysRemaining">minDaysRemaining</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.mustStaple">mustStaple</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.preCheckDelay">preCheckDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.preferredChain">preferredChain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.recursiveNameservers">recursiveNameservers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.revokeCertificateOnDestroy">revokeCertificateOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.revokeCertificateReason">revokeCertificateReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-acme.certificate.Certificate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-acme.certificate.Certificate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-acme.certificate.Certificate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-acme.certificate.Certificate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-acme.certificate.Certificate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-acme.certificate.Certificate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-acme.certificate.Certificate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-acme.certificate.Certificate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-acme.certificate.Certificate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-acme.certificate.Certificate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-acme.certificate.Certificate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-acme.certificate.Certificate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-acme.certificate.Certificate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-acme.certificate.Certificate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificateDomain`<sup>Required</sup> <a name="certificateDomain" id="@cdktf/provider-acme.certificate.Certificate.property.certificateDomain"></a>

```java
public java.lang.String getCertificateDomain();
```

- *Type:* java.lang.String

---

##### `certificateNotAfter`<sup>Required</sup> <a name="certificateNotAfter" id="@cdktf/provider-acme.certificate.Certificate.property.certificateNotAfter"></a>

```java
public java.lang.String getCertificateNotAfter();
```

- *Type:* java.lang.String

---

##### `certificateP12`<sup>Required</sup> <a name="certificateP12" id="@cdktf/provider-acme.certificate.Certificate.property.certificateP12"></a>

```java
public java.lang.String getCertificateP12();
```

- *Type:* java.lang.String

---

##### `certificatePem`<sup>Required</sup> <a name="certificatePem" id="@cdktf/provider-acme.certificate.Certificate.property.certificatePem"></a>

```java
public java.lang.String getCertificatePem();
```

- *Type:* java.lang.String

---

##### `certificateUrl`<sup>Required</sup> <a name="certificateUrl" id="@cdktf/provider-acme.certificate.Certificate.property.certificateUrl"></a>

```java
public java.lang.String getCertificateUrl();
```

- *Type:* java.lang.String

---

##### `dnsChallenge`<sup>Required</sup> <a name="dnsChallenge" id="@cdktf/provider-acme.certificate.Certificate.property.dnsChallenge"></a>

```java
public CertificateDnsChallengeList getDnsChallenge();
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList">CertificateDnsChallengeList</a>

---

##### `httpChallenge`<sup>Required</sup> <a name="httpChallenge" id="@cdktf/provider-acme.certificate.Certificate.property.httpChallenge"></a>

```java
public CertificateHttpChallengeOutputReference getHttpChallenge();
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference">CertificateHttpChallengeOutputReference</a>

---

##### `httpMemcachedChallenge`<sup>Required</sup> <a name="httpMemcachedChallenge" id="@cdktf/provider-acme.certificate.Certificate.property.httpMemcachedChallenge"></a>

```java
public CertificateHttpMemcachedChallengeOutputReference getHttpMemcachedChallenge();
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference">CertificateHttpMemcachedChallengeOutputReference</a>

---

##### `httpS3Challenge`<sup>Required</sup> <a name="httpS3Challenge" id="@cdktf/provider-acme.certificate.Certificate.property.httpS3Challenge"></a>

```java
public CertificateHttpS3ChallengeOutputReference getHttpS3Challenge();
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference">CertificateHttpS3ChallengeOutputReference</a>

---

##### `httpWebrootChallenge`<sup>Required</sup> <a name="httpWebrootChallenge" id="@cdktf/provider-acme.certificate.Certificate.property.httpWebrootChallenge"></a>

```java
public CertificateHttpWebrootChallengeOutputReference getHttpWebrootChallenge();
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference">CertificateHttpWebrootChallengeOutputReference</a>

---

##### `issuerPem`<sup>Required</sup> <a name="issuerPem" id="@cdktf/provider-acme.certificate.Certificate.property.issuerPem"></a>

```java
public java.lang.String getIssuerPem();
```

- *Type:* java.lang.String

---

##### `privateKeyPem`<sup>Required</sup> <a name="privateKeyPem" id="@cdktf/provider-acme.certificate.Certificate.property.privateKeyPem"></a>

```java
public java.lang.String getPrivateKeyPem();
```

- *Type:* java.lang.String

---

##### `tlsChallenge`<sup>Required</sup> <a name="tlsChallenge" id="@cdktf/provider-acme.certificate.Certificate.property.tlsChallenge"></a>

```java
public CertificateTlsChallengeOutputReference getTlsChallenge();
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference">CertificateTlsChallengeOutputReference</a>

---

##### `accountKeyPemInput`<sup>Optional</sup> <a name="accountKeyPemInput" id="@cdktf/provider-acme.certificate.Certificate.property.accountKeyPemInput"></a>

```java
public java.lang.String getAccountKeyPemInput();
```

- *Type:* java.lang.String

---

##### `certificateP12PasswordInput`<sup>Optional</sup> <a name="certificateP12PasswordInput" id="@cdktf/provider-acme.certificate.Certificate.property.certificateP12PasswordInput"></a>

```java
public java.lang.String getCertificateP12PasswordInput();
```

- *Type:* java.lang.String

---

##### `certificateRequestPemInput`<sup>Optional</sup> <a name="certificateRequestPemInput" id="@cdktf/provider-acme.certificate.Certificate.property.certificateRequestPemInput"></a>

```java
public java.lang.String getCertificateRequestPemInput();
```

- *Type:* java.lang.String

---

##### `certTimeoutInput`<sup>Optional</sup> <a name="certTimeoutInput" id="@cdktf/provider-acme.certificate.Certificate.property.certTimeoutInput"></a>

```java
public java.lang.Number getCertTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-acme.certificate.Certificate.property.commonNameInput"></a>

```java
public java.lang.String getCommonNameInput();
```

- *Type:* java.lang.String

---

##### `disableCompletePropagationInput`<sup>Optional</sup> <a name="disableCompletePropagationInput" id="@cdktf/provider-acme.certificate.Certificate.property.disableCompletePropagationInput"></a>

```java
public java.lang.Object getDisableCompletePropagationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dnsChallengeInput`<sup>Optional</sup> <a name="dnsChallengeInput" id="@cdktf/provider-acme.certificate.Certificate.property.dnsChallengeInput"></a>

```java
public java.lang.Object getDnsChallengeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a>>

---

##### `httpChallengeInput`<sup>Optional</sup> <a name="httpChallengeInput" id="@cdktf/provider-acme.certificate.Certificate.property.httpChallengeInput"></a>

```java
public CertificateHttpChallenge getHttpChallengeInput();
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a>

---

##### `httpMemcachedChallengeInput`<sup>Optional</sup> <a name="httpMemcachedChallengeInput" id="@cdktf/provider-acme.certificate.Certificate.property.httpMemcachedChallengeInput"></a>

```java
public CertificateHttpMemcachedChallenge getHttpMemcachedChallengeInput();
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a>

---

##### `httpS3ChallengeInput`<sup>Optional</sup> <a name="httpS3ChallengeInput" id="@cdktf/provider-acme.certificate.Certificate.property.httpS3ChallengeInput"></a>

```java
public CertificateHttpS3Challenge getHttpS3ChallengeInput();
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpS3Challenge">CertificateHttpS3Challenge</a>

---

##### `httpWebrootChallengeInput`<sup>Optional</sup> <a name="httpWebrootChallengeInput" id="@cdktf/provider-acme.certificate.Certificate.property.httpWebrootChallengeInput"></a>

```java
public CertificateHttpWebrootChallenge getHttpWebrootChallengeInput();
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-acme.certificate.Certificate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktf/provider-acme.certificate.Certificate.property.keyTypeInput"></a>

```java
public java.lang.String getKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `minDaysRemainingInput`<sup>Optional</sup> <a name="minDaysRemainingInput" id="@cdktf/provider-acme.certificate.Certificate.property.minDaysRemainingInput"></a>

```java
public java.lang.Number getMinDaysRemainingInput();
```

- *Type:* java.lang.Number

---

##### `mustStapleInput`<sup>Optional</sup> <a name="mustStapleInput" id="@cdktf/provider-acme.certificate.Certificate.property.mustStapleInput"></a>

```java
public java.lang.Object getMustStapleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `preCheckDelayInput`<sup>Optional</sup> <a name="preCheckDelayInput" id="@cdktf/provider-acme.certificate.Certificate.property.preCheckDelayInput"></a>

```java
public java.lang.Number getPreCheckDelayInput();
```

- *Type:* java.lang.Number

---

##### `preferredChainInput`<sup>Optional</sup> <a name="preferredChainInput" id="@cdktf/provider-acme.certificate.Certificate.property.preferredChainInput"></a>

```java
public java.lang.String getPreferredChainInput();
```

- *Type:* java.lang.String

---

##### `recursiveNameserversInput`<sup>Optional</sup> <a name="recursiveNameserversInput" id="@cdktf/provider-acme.certificate.Certificate.property.recursiveNameserversInput"></a>

```java
public java.util.List<java.lang.String> getRecursiveNameserversInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `revokeCertificateOnDestroyInput`<sup>Optional</sup> <a name="revokeCertificateOnDestroyInput" id="@cdktf/provider-acme.certificate.Certificate.property.revokeCertificateOnDestroyInput"></a>

```java
public java.lang.Object getRevokeCertificateOnDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `revokeCertificateReasonInput`<sup>Optional</sup> <a name="revokeCertificateReasonInput" id="@cdktf/provider-acme.certificate.Certificate.property.revokeCertificateReasonInput"></a>

```java
public java.lang.String getRevokeCertificateReasonInput();
```

- *Type:* java.lang.String

---

##### `subjectAlternativeNamesInput`<sup>Optional</sup> <a name="subjectAlternativeNamesInput" id="@cdktf/provider-acme.certificate.Certificate.property.subjectAlternativeNamesInput"></a>

```java
public java.util.List<java.lang.String> getSubjectAlternativeNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tlsChallengeInput`<sup>Optional</sup> <a name="tlsChallengeInput" id="@cdktf/provider-acme.certificate.Certificate.property.tlsChallengeInput"></a>

```java
public CertificateTlsChallenge getTlsChallengeInput();
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a>

---

##### `accountKeyPem`<sup>Required</sup> <a name="accountKeyPem" id="@cdktf/provider-acme.certificate.Certificate.property.accountKeyPem"></a>

```java
public java.lang.String getAccountKeyPem();
```

- *Type:* java.lang.String

---

##### `certificateP12Password`<sup>Required</sup> <a name="certificateP12Password" id="@cdktf/provider-acme.certificate.Certificate.property.certificateP12Password"></a>

```java
public java.lang.String getCertificateP12Password();
```

- *Type:* java.lang.String

---

##### `certificateRequestPem`<sup>Required</sup> <a name="certificateRequestPem" id="@cdktf/provider-acme.certificate.Certificate.property.certificateRequestPem"></a>

```java
public java.lang.String getCertificateRequestPem();
```

- *Type:* java.lang.String

---

##### `certTimeout`<sup>Required</sup> <a name="certTimeout" id="@cdktf/provider-acme.certificate.Certificate.property.certTimeout"></a>

```java
public java.lang.Number getCertTimeout();
```

- *Type:* java.lang.Number

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-acme.certificate.Certificate.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

---

##### `disableCompletePropagation`<sup>Required</sup> <a name="disableCompletePropagation" id="@cdktf/provider-acme.certificate.Certificate.property.disableCompletePropagation"></a>

```java
public java.lang.Object getDisableCompletePropagation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-acme.certificate.Certificate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-acme.certificate.Certificate.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

---

##### `minDaysRemaining`<sup>Required</sup> <a name="minDaysRemaining" id="@cdktf/provider-acme.certificate.Certificate.property.minDaysRemaining"></a>

```java
public java.lang.Number getMinDaysRemaining();
```

- *Type:* java.lang.Number

---

##### `mustStaple`<sup>Required</sup> <a name="mustStaple" id="@cdktf/provider-acme.certificate.Certificate.property.mustStaple"></a>

```java
public java.lang.Object getMustStaple();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `preCheckDelay`<sup>Required</sup> <a name="preCheckDelay" id="@cdktf/provider-acme.certificate.Certificate.property.preCheckDelay"></a>

```java
public java.lang.Number getPreCheckDelay();
```

- *Type:* java.lang.Number

---

##### `preferredChain`<sup>Required</sup> <a name="preferredChain" id="@cdktf/provider-acme.certificate.Certificate.property.preferredChain"></a>

```java
public java.lang.String getPreferredChain();
```

- *Type:* java.lang.String

---

##### `recursiveNameservers`<sup>Required</sup> <a name="recursiveNameservers" id="@cdktf/provider-acme.certificate.Certificate.property.recursiveNameservers"></a>

```java
public java.util.List<java.lang.String> getRecursiveNameservers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `revokeCertificateOnDestroy`<sup>Required</sup> <a name="revokeCertificateOnDestroy" id="@cdktf/provider-acme.certificate.Certificate.property.revokeCertificateOnDestroy"></a>

```java
public java.lang.Object getRevokeCertificateOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `revokeCertificateReason`<sup>Required</sup> <a name="revokeCertificateReason" id="@cdktf/provider-acme.certificate.Certificate.property.revokeCertificateReason"></a>

```java
public java.lang.String getRevokeCertificateReason();
```

- *Type:* java.lang.String

---

##### `subjectAlternativeNames`<sup>Required</sup> <a name="subjectAlternativeNames" id="@cdktf/provider-acme.certificate.Certificate.property.subjectAlternativeNames"></a>

```java
public java.util.List<java.lang.String> getSubjectAlternativeNames();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-acme.certificate.Certificate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateConfig <a name="CertificateConfig" id="@cdktf/provider-acme.certificate.CertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.certificate.CertificateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.acme.certificate.CertificateConfig;

CertificateConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accountKeyPem(java.lang.String)
//  .certificateP12Password(java.lang.String)
//  .certificateRequestPem(java.lang.String)
//  .certTimeout(java.lang.Number)
//  .commonName(java.lang.String)
//  .disableCompletePropagation(java.lang.Boolean)
//  .disableCompletePropagation(IResolvable)
//  .dnsChallenge(IResolvable)
//  .dnsChallenge(java.util.List<CertificateDnsChallenge>)
//  .httpChallenge(CertificateHttpChallenge)
//  .httpMemcachedChallenge(CertificateHttpMemcachedChallenge)
//  .httpS3Challenge(CertificateHttpS3Challenge)
//  .httpWebrootChallenge(CertificateHttpWebrootChallenge)
//  .id(java.lang.String)
//  .keyType(java.lang.String)
//  .minDaysRemaining(java.lang.Number)
//  .mustStaple(java.lang.Boolean)
//  .mustStaple(IResolvable)
//  .preCheckDelay(java.lang.Number)
//  .preferredChain(java.lang.String)
//  .recursiveNameservers(java.util.List<java.lang.String>)
//  .revokeCertificateOnDestroy(java.lang.Boolean)
//  .revokeCertificateOnDestroy(IResolvable)
//  .revokeCertificateReason(java.lang.String)
//  .subjectAlternativeNames(java.util.List<java.lang.String>)
//  .tlsChallenge(CertificateTlsChallenge)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.accountKeyPem">accountKeyPem</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#account_key_pem Certificate#account_key_pem}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.certificateP12Password">certificateP12Password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#certificate_p12_password Certificate#certificate_p12_password}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.certificateRequestPem">certificateRequestPem</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#certificate_request_pem Certificate#certificate_request_pem}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.certTimeout">certTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#cert_timeout Certificate#cert_timeout}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.commonName">commonName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#common_name Certificate#common_name}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.disableCompletePropagation">disableCompletePropagation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#disable_complete_propagation Certificate#disable_complete_propagation}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.dnsChallenge">dnsChallenge</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a>></code> | dns_challenge block. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.httpChallenge">httpChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a></code> | http_challenge block. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.httpMemcachedChallenge">httpMemcachedChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a></code> | http_memcached_challenge block. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.httpS3Challenge">httpS3Challenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3Challenge">CertificateHttpS3Challenge</a></code> | http_s3_challenge block. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.httpWebrootChallenge">httpWebrootChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a></code> | http_webroot_challenge block. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#id Certificate#id}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.keyType">keyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#key_type Certificate#key_type}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.minDaysRemaining">minDaysRemaining</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#min_days_remaining Certificate#min_days_remaining}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.mustStaple">mustStaple</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#must_staple Certificate#must_staple}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.preCheckDelay">preCheckDelay</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#pre_check_delay Certificate#pre_check_delay}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.preferredChain">preferredChain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#preferred_chain Certificate#preferred_chain}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.recursiveNameservers">recursiveNameservers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#recursive_nameservers Certificate#recursive_nameservers}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.revokeCertificateOnDestroy">revokeCertificateOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#revoke_certificate_on_destroy Certificate#revoke_certificate_on_destroy}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.revokeCertificateReason">revokeCertificateReason</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#revoke_certificate_reason Certificate#revoke_certificate_reason}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#subject_alternative_names Certificate#subject_alternative_names}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.tlsChallenge">tlsChallenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a></code> | tls_challenge block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-acme.certificate.CertificateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-acme.certificate.CertificateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-acme.certificate.CertificateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-acme.certificate.CertificateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-acme.certificate.CertificateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-acme.certificate.CertificateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-acme.certificate.CertificateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountKeyPem`<sup>Required</sup> <a name="accountKeyPem" id="@cdktf/provider-acme.certificate.CertificateConfig.property.accountKeyPem"></a>

```java
public java.lang.String getAccountKeyPem();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#account_key_pem Certificate#account_key_pem}.

---

##### `certificateP12Password`<sup>Optional</sup> <a name="certificateP12Password" id="@cdktf/provider-acme.certificate.CertificateConfig.property.certificateP12Password"></a>

```java
public java.lang.String getCertificateP12Password();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#certificate_p12_password Certificate#certificate_p12_password}.

---

##### `certificateRequestPem`<sup>Optional</sup> <a name="certificateRequestPem" id="@cdktf/provider-acme.certificate.CertificateConfig.property.certificateRequestPem"></a>

```java
public java.lang.String getCertificateRequestPem();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#certificate_request_pem Certificate#certificate_request_pem}.

---

##### `certTimeout`<sup>Optional</sup> <a name="certTimeout" id="@cdktf/provider-acme.certificate.CertificateConfig.property.certTimeout"></a>

```java
public java.lang.Number getCertTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#cert_timeout Certificate#cert_timeout}.

---

##### `commonName`<sup>Optional</sup> <a name="commonName" id="@cdktf/provider-acme.certificate.CertificateConfig.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#common_name Certificate#common_name}.

---

##### `disableCompletePropagation`<sup>Optional</sup> <a name="disableCompletePropagation" id="@cdktf/provider-acme.certificate.CertificateConfig.property.disableCompletePropagation"></a>

```java
public java.lang.Object getDisableCompletePropagation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#disable_complete_propagation Certificate#disable_complete_propagation}.

---

##### `dnsChallenge`<sup>Optional</sup> <a name="dnsChallenge" id="@cdktf/provider-acme.certificate.CertificateConfig.property.dnsChallenge"></a>

```java
public java.lang.Object getDnsChallenge();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a>>

dns_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#dns_challenge Certificate#dns_challenge}

---

##### `httpChallenge`<sup>Optional</sup> <a name="httpChallenge" id="@cdktf/provider-acme.certificate.CertificateConfig.property.httpChallenge"></a>

```java
public CertificateHttpChallenge getHttpChallenge();
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a>

http_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#http_challenge Certificate#http_challenge}

---

##### `httpMemcachedChallenge`<sup>Optional</sup> <a name="httpMemcachedChallenge" id="@cdktf/provider-acme.certificate.CertificateConfig.property.httpMemcachedChallenge"></a>

```java
public CertificateHttpMemcachedChallenge getHttpMemcachedChallenge();
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a>

http_memcached_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#http_memcached_challenge Certificate#http_memcached_challenge}

---

##### `httpS3Challenge`<sup>Optional</sup> <a name="httpS3Challenge" id="@cdktf/provider-acme.certificate.CertificateConfig.property.httpS3Challenge"></a>

```java
public CertificateHttpS3Challenge getHttpS3Challenge();
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpS3Challenge">CertificateHttpS3Challenge</a>

http_s3_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#http_s3_challenge Certificate#http_s3_challenge}

---

##### `httpWebrootChallenge`<sup>Optional</sup> <a name="httpWebrootChallenge" id="@cdktf/provider-acme.certificate.CertificateConfig.property.httpWebrootChallenge"></a>

```java
public CertificateHttpWebrootChallenge getHttpWebrootChallenge();
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a>

http_webroot_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#http_webroot_challenge Certificate#http_webroot_challenge}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-acme.certificate.CertificateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#id Certificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktf/provider-acme.certificate.CertificateConfig.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#key_type Certificate#key_type}.

---

##### `minDaysRemaining`<sup>Optional</sup> <a name="minDaysRemaining" id="@cdktf/provider-acme.certificate.CertificateConfig.property.minDaysRemaining"></a>

```java
public java.lang.Number getMinDaysRemaining();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#min_days_remaining Certificate#min_days_remaining}.

---

##### `mustStaple`<sup>Optional</sup> <a name="mustStaple" id="@cdktf/provider-acme.certificate.CertificateConfig.property.mustStaple"></a>

```java
public java.lang.Object getMustStaple();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#must_staple Certificate#must_staple}.

---

##### `preCheckDelay`<sup>Optional</sup> <a name="preCheckDelay" id="@cdktf/provider-acme.certificate.CertificateConfig.property.preCheckDelay"></a>

```java
public java.lang.Number getPreCheckDelay();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#pre_check_delay Certificate#pre_check_delay}.

---

##### `preferredChain`<sup>Optional</sup> <a name="preferredChain" id="@cdktf/provider-acme.certificate.CertificateConfig.property.preferredChain"></a>

```java
public java.lang.String getPreferredChain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#preferred_chain Certificate#preferred_chain}.

---

##### `recursiveNameservers`<sup>Optional</sup> <a name="recursiveNameservers" id="@cdktf/provider-acme.certificate.CertificateConfig.property.recursiveNameservers"></a>

```java
public java.util.List<java.lang.String> getRecursiveNameservers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#recursive_nameservers Certificate#recursive_nameservers}.

---

##### `revokeCertificateOnDestroy`<sup>Optional</sup> <a name="revokeCertificateOnDestroy" id="@cdktf/provider-acme.certificate.CertificateConfig.property.revokeCertificateOnDestroy"></a>

```java
public java.lang.Object getRevokeCertificateOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#revoke_certificate_on_destroy Certificate#revoke_certificate_on_destroy}.

---

##### `revokeCertificateReason`<sup>Optional</sup> <a name="revokeCertificateReason" id="@cdktf/provider-acme.certificate.CertificateConfig.property.revokeCertificateReason"></a>

```java
public java.lang.String getRevokeCertificateReason();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#revoke_certificate_reason Certificate#revoke_certificate_reason}.

---

##### `subjectAlternativeNames`<sup>Optional</sup> <a name="subjectAlternativeNames" id="@cdktf/provider-acme.certificate.CertificateConfig.property.subjectAlternativeNames"></a>

```java
public java.util.List<java.lang.String> getSubjectAlternativeNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#subject_alternative_names Certificate#subject_alternative_names}.

---

##### `tlsChallenge`<sup>Optional</sup> <a name="tlsChallenge" id="@cdktf/provider-acme.certificate.CertificateConfig.property.tlsChallenge"></a>

```java
public CertificateTlsChallenge getTlsChallenge();
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a>

tls_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#tls_challenge Certificate#tls_challenge}

---

### CertificateDnsChallenge <a name="CertificateDnsChallenge" id="@cdktf/provider-acme.certificate.CertificateDnsChallenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.certificate.CertificateDnsChallenge.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.acme.certificate.CertificateDnsChallenge;

CertificateDnsChallenge.builder()
    .provider(java.lang.String)
//  .config(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge.property.provider">provider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#provider Certificate#provider}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge.property.config">config</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#config Certificate#config}. |

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-acme.certificate.CertificateDnsChallenge.property.provider"></a>

```java
public java.lang.String getProvider();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#provider Certificate#provider}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-acme.certificate.CertificateDnsChallenge.property.config"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#config Certificate#config}.

---

### CertificateHttpChallenge <a name="CertificateHttpChallenge" id="@cdktf/provider-acme.certificate.CertificateHttpChallenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.certificate.CertificateHttpChallenge.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.acme.certificate.CertificateHttpChallenge;

CertificateHttpChallenge.builder()
//  .port(java.lang.Number)
//  .proxyHeader(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#port Certificate#port}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge.property.proxyHeader">proxyHeader</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#proxy_header Certificate#proxy_header}. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-acme.certificate.CertificateHttpChallenge.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#port Certificate#port}.

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktf/provider-acme.certificate.CertificateHttpChallenge.property.proxyHeader"></a>

```java
public java.lang.String getProxyHeader();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#proxy_header Certificate#proxy_header}.

---

### CertificateHttpMemcachedChallenge <a name="CertificateHttpMemcachedChallenge" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.acme.certificate.CertificateHttpMemcachedChallenge;

CertificateHttpMemcachedChallenge.builder()
    .hosts(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge.property.hosts">hosts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#hosts Certificate#hosts}. |

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge.property.hosts"></a>

```java
public java.util.List<java.lang.String> getHosts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#hosts Certificate#hosts}.

---

### CertificateHttpS3Challenge <a name="CertificateHttpS3Challenge" id="@cdktf/provider-acme.certificate.CertificateHttpS3Challenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.certificate.CertificateHttpS3Challenge.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.acme.certificate.CertificateHttpS3Challenge;

CertificateHttpS3Challenge.builder()
    .s3Bucket(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3Challenge.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#s3_bucket Certificate#s3_bucket}. |

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktf/provider-acme.certificate.CertificateHttpS3Challenge.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#s3_bucket Certificate#s3_bucket}.

---

### CertificateHttpWebrootChallenge <a name="CertificateHttpWebrootChallenge" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.acme.certificate.CertificateHttpWebrootChallenge;

CertificateHttpWebrootChallenge.builder()
    .directory(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge.property.directory">directory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#directory Certificate#directory}. |

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#directory Certificate#directory}.

---

### CertificateTlsChallenge <a name="CertificateTlsChallenge" id="@cdktf/provider-acme.certificate.CertificateTlsChallenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.certificate.CertificateTlsChallenge.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.acme.certificate.CertificateTlsChallenge;

CertificateTlsChallenge.builder()
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#port Certificate#port}. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-acme.certificate.CertificateTlsChallenge.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.19.0/docs/resources/certificate#port Certificate#port}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificateDnsChallengeList <a name="CertificateDnsChallengeList" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.acme.certificate.CertificateDnsChallengeList;

new CertificateDnsChallengeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.get"></a>

```java
public CertificateDnsChallengeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a>>

---


### CertificateDnsChallengeOutputReference <a name="CertificateDnsChallengeOutputReference" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.acme.certificate.CertificateDnsChallengeOutputReference;

new CertificateDnsChallengeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.resetConfig"></a>

```java
public void resetConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.configInput">configInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.providerInput">providerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.config">config</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.provider">provider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.configInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.providerInput"></a>

```java
public java.lang.String getProviderInput();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.config"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.provider"></a>

```java
public java.lang.String getProvider();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a>

---


### CertificateHttpChallengeOutputReference <a name="CertificateHttpChallengeOutputReference" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.acme.certificate.CertificateHttpChallengeOutputReference;

new CertificateHttpChallengeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.resetProxyHeader"></a>

```java
public void resetProxyHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.proxyHeader">proxyHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.proxyHeaderInput"></a>

```java
public java.lang.String getProxyHeaderInput();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.proxyHeader"></a>

```java
public java.lang.String getProxyHeader();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.internalValue"></a>

```java
public CertificateHttpChallenge getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a>

---


### CertificateHttpMemcachedChallengeOutputReference <a name="CertificateHttpMemcachedChallengeOutputReference" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.acme.certificate.CertificateHttpMemcachedChallengeOutputReference;

new CertificateHttpMemcachedChallengeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.hostsInput">hostsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.hosts">hosts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.hostsInput"></a>

```java
public java.util.List<java.lang.String> getHostsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.hosts"></a>

```java
public java.util.List<java.lang.String> getHosts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.internalValue"></a>

```java
public CertificateHttpMemcachedChallenge getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a>

---


### CertificateHttpS3ChallengeOutputReference <a name="CertificateHttpS3ChallengeOutputReference" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.acme.certificate.CertificateHttpS3ChallengeOutputReference;

new CertificateHttpS3ChallengeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3Challenge">CertificateHttpS3Challenge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.s3BucketInput"></a>

```java
public java.lang.String getS3BucketInput();
```

- *Type:* java.lang.String

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.internalValue"></a>

```java
public CertificateHttpS3Challenge getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpS3Challenge">CertificateHttpS3Challenge</a>

---


### CertificateHttpWebrootChallengeOutputReference <a name="CertificateHttpWebrootChallengeOutputReference" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.acme.certificate.CertificateHttpWebrootChallengeOutputReference;

new CertificateHttpWebrootChallengeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.directoryInput">directoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.directory">directory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.directoryInput"></a>

```java
public java.lang.String getDirectoryInput();
```

- *Type:* java.lang.String

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.internalValue"></a>

```java
public CertificateHttpWebrootChallenge getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a>

---


### CertificateTlsChallengeOutputReference <a name="CertificateTlsChallengeOutputReference" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.acme.certificate.CertificateTlsChallengeOutputReference;

new CertificateTlsChallengeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.internalValue"></a>

```java
public CertificateTlsChallenge getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a>

---



