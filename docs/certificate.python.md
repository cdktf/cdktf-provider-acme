# `acme_certificate`

Refer to the Terraform Registory for docs: [`acme_certificate`](https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate).

# `certificate` Submodule <a name="`certificate` Submodule" id="@cdktf/provider-acme.certificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Certificate <a name="Certificate" id="@cdktf/provider-acme.certificate.Certificate"></a>

Represents a {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate acme_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.Certificate.Initializer"></a>

```python
from cdktf_cdktf_provider_acme import certificate

certificate.Certificate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_key_pem: str,
  certificate_p12_password: str = None,
  certificate_request_pem: str = None,
  common_name: str = None,
  disable_complete_propagation: typing.Union[bool, IResolvable] = None,
  dns_challenge: typing.Union[IResolvable, typing.List[CertificateDnsChallenge]] = None,
  http_challenge: CertificateHttpChallenge = None,
  http_memcached_challenge: CertificateHttpMemcachedChallenge = None,
  http_s3_challenge: CertificateHttpS3Challenge = None,
  http_webroot_challenge: CertificateHttpWebrootChallenge = None,
  id: str = None,
  key_type: str = None,
  min_days_remaining: typing.Union[int, float] = None,
  must_staple: typing.Union[bool, IResolvable] = None,
  pre_check_delay: typing.Union[int, float] = None,
  preferred_chain: str = None,
  recursive_nameservers: typing.List[str] = None,
  revoke_certificate_on_destroy: typing.Union[bool, IResolvable] = None,
  subject_alternative_names: typing.List[str] = None,
  tls_challenge: CertificateTlsChallenge = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.accountKeyPem">account_key_pem</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#account_key_pem Certificate#account_key_pem}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.certificateP12Password">certificate_p12_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#certificate_p12_password Certificate#certificate_p12_password}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.certificateRequestPem">certificate_request_pem</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#certificate_request_pem Certificate#certificate_request_pem}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.commonName">common_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#common_name Certificate#common_name}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.disableCompletePropagation">disable_complete_propagation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#disable_complete_propagation Certificate#disable_complete_propagation}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.dnsChallenge">dns_challenge</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a>]]</code> | dns_challenge block. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.httpChallenge">http_challenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a></code> | http_challenge block. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.httpMemcachedChallenge">http_memcached_challenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a></code> | http_memcached_challenge block. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.httpS3Challenge">http_s3_challenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3Challenge">CertificateHttpS3Challenge</a></code> | http_s3_challenge block. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.httpWebrootChallenge">http_webroot_challenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a></code> | http_webroot_challenge block. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#id Certificate#id}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.keyType">key_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#key_type Certificate#key_type}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.minDaysRemaining">min_days_remaining</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#min_days_remaining Certificate#min_days_remaining}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.mustStaple">must_staple</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#must_staple Certificate#must_staple}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.preCheckDelay">pre_check_delay</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#pre_check_delay Certificate#pre_check_delay}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.preferredChain">preferred_chain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#preferred_chain Certificate#preferred_chain}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.recursiveNameservers">recursive_nameservers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#recursive_nameservers Certificate#recursive_nameservers}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.revokeCertificateOnDestroy">revoke_certificate_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#revoke_certificate_on_destroy Certificate#revoke_certificate_on_destroy}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.subjectAlternativeNames">subject_alternative_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#subject_alternative_names Certificate#subject_alternative_names}. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.tlsChallenge">tls_challenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a></code> | tls_challenge block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_key_pem`<sup>Required</sup> <a name="account_key_pem" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.accountKeyPem"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#account_key_pem Certificate#account_key_pem}.

---

##### `certificate_p12_password`<sup>Optional</sup> <a name="certificate_p12_password" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.certificateP12Password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#certificate_p12_password Certificate#certificate_p12_password}.

---

##### `certificate_request_pem`<sup>Optional</sup> <a name="certificate_request_pem" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.certificateRequestPem"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#certificate_request_pem Certificate#certificate_request_pem}.

---

##### `common_name`<sup>Optional</sup> <a name="common_name" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.commonName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#common_name Certificate#common_name}.

---

##### `disable_complete_propagation`<sup>Optional</sup> <a name="disable_complete_propagation" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.disableCompletePropagation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#disable_complete_propagation Certificate#disable_complete_propagation}.

---

##### `dns_challenge`<sup>Optional</sup> <a name="dns_challenge" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.dnsChallenge"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a>]]

dns_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#dns_challenge Certificate#dns_challenge}

---

##### `http_challenge`<sup>Optional</sup> <a name="http_challenge" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.httpChallenge"></a>

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a>

http_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#http_challenge Certificate#http_challenge}

---

##### `http_memcached_challenge`<sup>Optional</sup> <a name="http_memcached_challenge" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.httpMemcachedChallenge"></a>

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a>

http_memcached_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#http_memcached_challenge Certificate#http_memcached_challenge}

---

##### `http_s3_challenge`<sup>Optional</sup> <a name="http_s3_challenge" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.httpS3Challenge"></a>

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpS3Challenge">CertificateHttpS3Challenge</a>

http_s3_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#http_s3_challenge Certificate#http_s3_challenge}

---

##### `http_webroot_challenge`<sup>Optional</sup> <a name="http_webroot_challenge" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.httpWebrootChallenge"></a>

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a>

http_webroot_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#http_webroot_challenge Certificate#http_webroot_challenge}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#id Certificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.keyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#key_type Certificate#key_type}.

---

##### `min_days_remaining`<sup>Optional</sup> <a name="min_days_remaining" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.minDaysRemaining"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#min_days_remaining Certificate#min_days_remaining}.

---

##### `must_staple`<sup>Optional</sup> <a name="must_staple" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.mustStaple"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#must_staple Certificate#must_staple}.

---

##### `pre_check_delay`<sup>Optional</sup> <a name="pre_check_delay" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.preCheckDelay"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#pre_check_delay Certificate#pre_check_delay}.

---

##### `preferred_chain`<sup>Optional</sup> <a name="preferred_chain" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.preferredChain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#preferred_chain Certificate#preferred_chain}.

---

##### `recursive_nameservers`<sup>Optional</sup> <a name="recursive_nameservers" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.recursiveNameservers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#recursive_nameservers Certificate#recursive_nameservers}.

---

##### `revoke_certificate_on_destroy`<sup>Optional</sup> <a name="revoke_certificate_on_destroy" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.revokeCertificateOnDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#revoke_certificate_on_destroy Certificate#revoke_certificate_on_destroy}.

---

##### `subject_alternative_names`<sup>Optional</sup> <a name="subject_alternative_names" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.subjectAlternativeNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#subject_alternative_names Certificate#subject_alternative_names}.

---

##### `tls_challenge`<sup>Optional</sup> <a name="tls_challenge" id="@cdktf/provider-acme.certificate.Certificate.Initializer.parameter.tlsChallenge"></a>

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a>

tls_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#tls_challenge Certificate#tls_challenge}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.putDnsChallenge">put_dns_challenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.putHttpChallenge">put_http_challenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.putHttpMemcachedChallenge">put_http_memcached_challenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.putHttpS3Challenge">put_http_s3_challenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.putHttpWebrootChallenge">put_http_webroot_challenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.putTlsChallenge">put_tls_challenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetCertificateP12Password">reset_certificate_p12_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetCertificateRequestPem">reset_certificate_request_pem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetCommonName">reset_common_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetDisableCompletePropagation">reset_disable_complete_propagation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetDnsChallenge">reset_dns_challenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetHttpChallenge">reset_http_challenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetHttpMemcachedChallenge">reset_http_memcached_challenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetHttpS3Challenge">reset_http_s3_challenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetHttpWebrootChallenge">reset_http_webroot_challenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetKeyType">reset_key_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetMinDaysRemaining">reset_min_days_remaining</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetMustStaple">reset_must_staple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetPreCheckDelay">reset_pre_check_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetPreferredChain">reset_preferred_chain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetRecursiveNameservers">reset_recursive_nameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetRevokeCertificateOnDestroy">reset_revoke_certificate_on_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetSubjectAlternativeNames">reset_subject_alternative_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.resetTlsChallenge">reset_tls_challenge</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-acme.certificate.Certificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-acme.certificate.Certificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-acme.certificate.Certificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-acme.certificate.Certificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-acme.certificate.Certificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-acme.certificate.Certificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-acme.certificate.Certificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-acme.certificate.Certificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-acme.certificate.Certificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-acme.certificate.Certificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.Certificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-acme.certificate.Certificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.Certificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-acme.certificate.Certificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.Certificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-acme.certificate.Certificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.Certificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-acme.certificate.Certificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.Certificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-acme.certificate.Certificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.Certificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-acme.certificate.Certificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.Certificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-acme.certificate.Certificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.Certificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-acme.certificate.Certificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.Certificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-acme.certificate.Certificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.Certificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_dns_challenge` <a name="put_dns_challenge" id="@cdktf/provider-acme.certificate.Certificate.putDnsChallenge"></a>

```python
def put_dns_challenge(
  value: typing.Union[IResolvable, typing.List[CertificateDnsChallenge]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-acme.certificate.Certificate.putDnsChallenge.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a>]]

---

##### `put_http_challenge` <a name="put_http_challenge" id="@cdktf/provider-acme.certificate.Certificate.putHttpChallenge"></a>

```python
def put_http_challenge(
  port: typing.Union[int, float] = None,
  proxy_header: str = None
) -> None
```

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-acme.certificate.Certificate.putHttpChallenge.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#port Certificate#port}.

---

###### `proxy_header`<sup>Optional</sup> <a name="proxy_header" id="@cdktf/provider-acme.certificate.Certificate.putHttpChallenge.parameter.proxyHeader"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#proxy_header Certificate#proxy_header}.

---

##### `put_http_memcached_challenge` <a name="put_http_memcached_challenge" id="@cdktf/provider-acme.certificate.Certificate.putHttpMemcachedChallenge"></a>

```python
def put_http_memcached_challenge(
  hosts: typing.List[str]
) -> None
```

###### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-acme.certificate.Certificate.putHttpMemcachedChallenge.parameter.hosts"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#hosts Certificate#hosts}.

---

##### `put_http_s3_challenge` <a name="put_http_s3_challenge" id="@cdktf/provider-acme.certificate.Certificate.putHttpS3Challenge"></a>

```python
def put_http_s3_challenge(
  s3_bucket: str
) -> None
```

###### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktf/provider-acme.certificate.Certificate.putHttpS3Challenge.parameter.s3Bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#s3_bucket Certificate#s3_bucket}.

---

##### `put_http_webroot_challenge` <a name="put_http_webroot_challenge" id="@cdktf/provider-acme.certificate.Certificate.putHttpWebrootChallenge"></a>

```python
def put_http_webroot_challenge(
  directory: str
) -> None
```

###### `directory`<sup>Required</sup> <a name="directory" id="@cdktf/provider-acme.certificate.Certificate.putHttpWebrootChallenge.parameter.directory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#directory Certificate#directory}.

---

##### `put_tls_challenge` <a name="put_tls_challenge" id="@cdktf/provider-acme.certificate.Certificate.putTlsChallenge"></a>

```python
def put_tls_challenge(
  port: typing.Union[int, float] = None
) -> None
```

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-acme.certificate.Certificate.putTlsChallenge.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#port Certificate#port}.

---

##### `reset_certificate_p12_password` <a name="reset_certificate_p12_password" id="@cdktf/provider-acme.certificate.Certificate.resetCertificateP12Password"></a>

```python
def reset_certificate_p12_password() -> None
```

##### `reset_certificate_request_pem` <a name="reset_certificate_request_pem" id="@cdktf/provider-acme.certificate.Certificate.resetCertificateRequestPem"></a>

```python
def reset_certificate_request_pem() -> None
```

##### `reset_common_name` <a name="reset_common_name" id="@cdktf/provider-acme.certificate.Certificate.resetCommonName"></a>

```python
def reset_common_name() -> None
```

##### `reset_disable_complete_propagation` <a name="reset_disable_complete_propagation" id="@cdktf/provider-acme.certificate.Certificate.resetDisableCompletePropagation"></a>

```python
def reset_disable_complete_propagation() -> None
```

##### `reset_dns_challenge` <a name="reset_dns_challenge" id="@cdktf/provider-acme.certificate.Certificate.resetDnsChallenge"></a>

```python
def reset_dns_challenge() -> None
```

##### `reset_http_challenge` <a name="reset_http_challenge" id="@cdktf/provider-acme.certificate.Certificate.resetHttpChallenge"></a>

```python
def reset_http_challenge() -> None
```

##### `reset_http_memcached_challenge` <a name="reset_http_memcached_challenge" id="@cdktf/provider-acme.certificate.Certificate.resetHttpMemcachedChallenge"></a>

```python
def reset_http_memcached_challenge() -> None
```

##### `reset_http_s3_challenge` <a name="reset_http_s3_challenge" id="@cdktf/provider-acme.certificate.Certificate.resetHttpS3Challenge"></a>

```python
def reset_http_s3_challenge() -> None
```

##### `reset_http_webroot_challenge` <a name="reset_http_webroot_challenge" id="@cdktf/provider-acme.certificate.Certificate.resetHttpWebrootChallenge"></a>

```python
def reset_http_webroot_challenge() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-acme.certificate.Certificate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_type` <a name="reset_key_type" id="@cdktf/provider-acme.certificate.Certificate.resetKeyType"></a>

```python
def reset_key_type() -> None
```

##### `reset_min_days_remaining` <a name="reset_min_days_remaining" id="@cdktf/provider-acme.certificate.Certificate.resetMinDaysRemaining"></a>

```python
def reset_min_days_remaining() -> None
```

##### `reset_must_staple` <a name="reset_must_staple" id="@cdktf/provider-acme.certificate.Certificate.resetMustStaple"></a>

```python
def reset_must_staple() -> None
```

##### `reset_pre_check_delay` <a name="reset_pre_check_delay" id="@cdktf/provider-acme.certificate.Certificate.resetPreCheckDelay"></a>

```python
def reset_pre_check_delay() -> None
```

##### `reset_preferred_chain` <a name="reset_preferred_chain" id="@cdktf/provider-acme.certificate.Certificate.resetPreferredChain"></a>

```python
def reset_preferred_chain() -> None
```

##### `reset_recursive_nameservers` <a name="reset_recursive_nameservers" id="@cdktf/provider-acme.certificate.Certificate.resetRecursiveNameservers"></a>

```python
def reset_recursive_nameservers() -> None
```

##### `reset_revoke_certificate_on_destroy` <a name="reset_revoke_certificate_on_destroy" id="@cdktf/provider-acme.certificate.Certificate.resetRevokeCertificateOnDestroy"></a>

```python
def reset_revoke_certificate_on_destroy() -> None
```

##### `reset_subject_alternative_names` <a name="reset_subject_alternative_names" id="@cdktf/provider-acme.certificate.Certificate.resetSubjectAlternativeNames"></a>

```python
def reset_subject_alternative_names() -> None
```

##### `reset_tls_challenge` <a name="reset_tls_challenge" id="@cdktf/provider-acme.certificate.Certificate.resetTlsChallenge"></a>

```python
def reset_tls_challenge() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-acme.certificate.Certificate.isConstruct"></a>

```python
from cdktf_cdktf_provider_acme import certificate

certificate.Certificate.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-acme.certificate.Certificate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_acme import certificate

certificate.Certificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-acme.certificate.Certificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-acme.certificate.Certificate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_acme import certificate

certificate.Certificate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-acme.certificate.Certificate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateDomain">certificate_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateNotAfter">certificate_not_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateP12">certificate_p12</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificatePem">certificate_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateUrl">certificate_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.dnsChallenge">dns_challenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList">CertificateDnsChallengeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpChallenge">http_challenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference">CertificateHttpChallengeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpMemcachedChallenge">http_memcached_challenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference">CertificateHttpMemcachedChallengeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpS3Challenge">http_s3_challenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference">CertificateHttpS3ChallengeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpWebrootChallenge">http_webroot_challenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference">CertificateHttpWebrootChallengeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.issuerPem">issuer_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.privateKeyPem">private_key_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.tlsChallenge">tls_challenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference">CertificateTlsChallengeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.accountKeyPemInput">account_key_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateP12PasswordInput">certificate_p12_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateRequestPemInput">certificate_request_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.commonNameInput">common_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.disableCompletePropagationInput">disable_complete_propagation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.dnsChallengeInput">dns_challenge_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpChallengeInput">http_challenge_input</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpMemcachedChallengeInput">http_memcached_challenge_input</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpS3ChallengeInput">http_s3_challenge_input</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3Challenge">CertificateHttpS3Challenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.httpWebrootChallengeInput">http_webroot_challenge_input</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.keyTypeInput">key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.minDaysRemainingInput">min_days_remaining_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.mustStapleInput">must_staple_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.preCheckDelayInput">pre_check_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.preferredChainInput">preferred_chain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.recursiveNameserversInput">recursive_nameservers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.revokeCertificateOnDestroyInput">revoke_certificate_on_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.subjectAlternativeNamesInput">subject_alternative_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.tlsChallengeInput">tls_challenge_input</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.accountKeyPem">account_key_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateP12Password">certificate_p12_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.certificateRequestPem">certificate_request_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.disableCompletePropagation">disable_complete_propagation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.minDaysRemaining">min_days_remaining</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.mustStaple">must_staple</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.preCheckDelay">pre_check_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.preferredChain">preferred_chain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.recursiveNameservers">recursive_nameservers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.revokeCertificateOnDestroy">revoke_certificate_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-acme.certificate.Certificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-acme.certificate.Certificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-acme.certificate.Certificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-acme.certificate.Certificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-acme.certificate.Certificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-acme.certificate.Certificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-acme.certificate.Certificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-acme.certificate.Certificate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-acme.certificate.Certificate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-acme.certificate.Certificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-acme.certificate.Certificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-acme.certificate.Certificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-acme.certificate.Certificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-acme.certificate.Certificate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_domain`<sup>Required</sup> <a name="certificate_domain" id="@cdktf/provider-acme.certificate.Certificate.property.certificateDomain"></a>

```python
certificate_domain: str
```

- *Type:* str

---

##### `certificate_not_after`<sup>Required</sup> <a name="certificate_not_after" id="@cdktf/provider-acme.certificate.Certificate.property.certificateNotAfter"></a>

```python
certificate_not_after: str
```

- *Type:* str

---

##### `certificate_p12`<sup>Required</sup> <a name="certificate_p12" id="@cdktf/provider-acme.certificate.Certificate.property.certificateP12"></a>

```python
certificate_p12: str
```

- *Type:* str

---

##### `certificate_pem`<sup>Required</sup> <a name="certificate_pem" id="@cdktf/provider-acme.certificate.Certificate.property.certificatePem"></a>

```python
certificate_pem: str
```

- *Type:* str

---

##### `certificate_url`<sup>Required</sup> <a name="certificate_url" id="@cdktf/provider-acme.certificate.Certificate.property.certificateUrl"></a>

```python
certificate_url: str
```

- *Type:* str

---

##### `dns_challenge`<sup>Required</sup> <a name="dns_challenge" id="@cdktf/provider-acme.certificate.Certificate.property.dnsChallenge"></a>

```python
dns_challenge: CertificateDnsChallengeList
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList">CertificateDnsChallengeList</a>

---

##### `http_challenge`<sup>Required</sup> <a name="http_challenge" id="@cdktf/provider-acme.certificate.Certificate.property.httpChallenge"></a>

```python
http_challenge: CertificateHttpChallengeOutputReference
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference">CertificateHttpChallengeOutputReference</a>

---

##### `http_memcached_challenge`<sup>Required</sup> <a name="http_memcached_challenge" id="@cdktf/provider-acme.certificate.Certificate.property.httpMemcachedChallenge"></a>

```python
http_memcached_challenge: CertificateHttpMemcachedChallengeOutputReference
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference">CertificateHttpMemcachedChallengeOutputReference</a>

---

##### `http_s3_challenge`<sup>Required</sup> <a name="http_s3_challenge" id="@cdktf/provider-acme.certificate.Certificate.property.httpS3Challenge"></a>

```python
http_s3_challenge: CertificateHttpS3ChallengeOutputReference
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference">CertificateHttpS3ChallengeOutputReference</a>

---

##### `http_webroot_challenge`<sup>Required</sup> <a name="http_webroot_challenge" id="@cdktf/provider-acme.certificate.Certificate.property.httpWebrootChallenge"></a>

```python
http_webroot_challenge: CertificateHttpWebrootChallengeOutputReference
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference">CertificateHttpWebrootChallengeOutputReference</a>

---

##### `issuer_pem`<sup>Required</sup> <a name="issuer_pem" id="@cdktf/provider-acme.certificate.Certificate.property.issuerPem"></a>

```python
issuer_pem: str
```

- *Type:* str

---

##### `private_key_pem`<sup>Required</sup> <a name="private_key_pem" id="@cdktf/provider-acme.certificate.Certificate.property.privateKeyPem"></a>

```python
private_key_pem: str
```

- *Type:* str

---

##### `tls_challenge`<sup>Required</sup> <a name="tls_challenge" id="@cdktf/provider-acme.certificate.Certificate.property.tlsChallenge"></a>

```python
tls_challenge: CertificateTlsChallengeOutputReference
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference">CertificateTlsChallengeOutputReference</a>

---

##### `account_key_pem_input`<sup>Optional</sup> <a name="account_key_pem_input" id="@cdktf/provider-acme.certificate.Certificate.property.accountKeyPemInput"></a>

```python
account_key_pem_input: str
```

- *Type:* str

---

##### `certificate_p12_password_input`<sup>Optional</sup> <a name="certificate_p12_password_input" id="@cdktf/provider-acme.certificate.Certificate.property.certificateP12PasswordInput"></a>

```python
certificate_p12_password_input: str
```

- *Type:* str

---

##### `certificate_request_pem_input`<sup>Optional</sup> <a name="certificate_request_pem_input" id="@cdktf/provider-acme.certificate.Certificate.property.certificateRequestPemInput"></a>

```python
certificate_request_pem_input: str
```

- *Type:* str

---

##### `common_name_input`<sup>Optional</sup> <a name="common_name_input" id="@cdktf/provider-acme.certificate.Certificate.property.commonNameInput"></a>

```python
common_name_input: str
```

- *Type:* str

---

##### `disable_complete_propagation_input`<sup>Optional</sup> <a name="disable_complete_propagation_input" id="@cdktf/provider-acme.certificate.Certificate.property.disableCompletePropagationInput"></a>

```python
disable_complete_propagation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dns_challenge_input`<sup>Optional</sup> <a name="dns_challenge_input" id="@cdktf/provider-acme.certificate.Certificate.property.dnsChallengeInput"></a>

```python
dns_challenge_input: typing.Union[IResolvable, typing.List[CertificateDnsChallenge]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a>]]

---

##### `http_challenge_input`<sup>Optional</sup> <a name="http_challenge_input" id="@cdktf/provider-acme.certificate.Certificate.property.httpChallengeInput"></a>

```python
http_challenge_input: CertificateHttpChallenge
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a>

---

##### `http_memcached_challenge_input`<sup>Optional</sup> <a name="http_memcached_challenge_input" id="@cdktf/provider-acme.certificate.Certificate.property.httpMemcachedChallengeInput"></a>

```python
http_memcached_challenge_input: CertificateHttpMemcachedChallenge
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a>

---

##### `http_s3_challenge_input`<sup>Optional</sup> <a name="http_s3_challenge_input" id="@cdktf/provider-acme.certificate.Certificate.property.httpS3ChallengeInput"></a>

```python
http_s3_challenge_input: CertificateHttpS3Challenge
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpS3Challenge">CertificateHttpS3Challenge</a>

---

##### `http_webroot_challenge_input`<sup>Optional</sup> <a name="http_webroot_challenge_input" id="@cdktf/provider-acme.certificate.Certificate.property.httpWebrootChallengeInput"></a>

```python
http_webroot_challenge_input: CertificateHttpWebrootChallenge
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-acme.certificate.Certificate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_type_input`<sup>Optional</sup> <a name="key_type_input" id="@cdktf/provider-acme.certificate.Certificate.property.keyTypeInput"></a>

```python
key_type_input: str
```

- *Type:* str

---

##### `min_days_remaining_input`<sup>Optional</sup> <a name="min_days_remaining_input" id="@cdktf/provider-acme.certificate.Certificate.property.minDaysRemainingInput"></a>

```python
min_days_remaining_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `must_staple_input`<sup>Optional</sup> <a name="must_staple_input" id="@cdktf/provider-acme.certificate.Certificate.property.mustStapleInput"></a>

```python
must_staple_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pre_check_delay_input`<sup>Optional</sup> <a name="pre_check_delay_input" id="@cdktf/provider-acme.certificate.Certificate.property.preCheckDelayInput"></a>

```python
pre_check_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preferred_chain_input`<sup>Optional</sup> <a name="preferred_chain_input" id="@cdktf/provider-acme.certificate.Certificate.property.preferredChainInput"></a>

```python
preferred_chain_input: str
```

- *Type:* str

---

##### `recursive_nameservers_input`<sup>Optional</sup> <a name="recursive_nameservers_input" id="@cdktf/provider-acme.certificate.Certificate.property.recursiveNameserversInput"></a>

```python
recursive_nameservers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `revoke_certificate_on_destroy_input`<sup>Optional</sup> <a name="revoke_certificate_on_destroy_input" id="@cdktf/provider-acme.certificate.Certificate.property.revokeCertificateOnDestroyInput"></a>

```python
revoke_certificate_on_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subject_alternative_names_input`<sup>Optional</sup> <a name="subject_alternative_names_input" id="@cdktf/provider-acme.certificate.Certificate.property.subjectAlternativeNamesInput"></a>

```python
subject_alternative_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tls_challenge_input`<sup>Optional</sup> <a name="tls_challenge_input" id="@cdktf/provider-acme.certificate.Certificate.property.tlsChallengeInput"></a>

```python
tls_challenge_input: CertificateTlsChallenge
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a>

---

##### `account_key_pem`<sup>Required</sup> <a name="account_key_pem" id="@cdktf/provider-acme.certificate.Certificate.property.accountKeyPem"></a>

```python
account_key_pem: str
```

- *Type:* str

---

##### `certificate_p12_password`<sup>Required</sup> <a name="certificate_p12_password" id="@cdktf/provider-acme.certificate.Certificate.property.certificateP12Password"></a>

```python
certificate_p12_password: str
```

- *Type:* str

---

##### `certificate_request_pem`<sup>Required</sup> <a name="certificate_request_pem" id="@cdktf/provider-acme.certificate.Certificate.property.certificateRequestPem"></a>

```python
certificate_request_pem: str
```

- *Type:* str

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-acme.certificate.Certificate.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `disable_complete_propagation`<sup>Required</sup> <a name="disable_complete_propagation" id="@cdktf/provider-acme.certificate.Certificate.property.disableCompletePropagation"></a>

```python
disable_complete_propagation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-acme.certificate.Certificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktf/provider-acme.certificate.Certificate.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `min_days_remaining`<sup>Required</sup> <a name="min_days_remaining" id="@cdktf/provider-acme.certificate.Certificate.property.minDaysRemaining"></a>

```python
min_days_remaining: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `must_staple`<sup>Required</sup> <a name="must_staple" id="@cdktf/provider-acme.certificate.Certificate.property.mustStaple"></a>

```python
must_staple: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pre_check_delay`<sup>Required</sup> <a name="pre_check_delay" id="@cdktf/provider-acme.certificate.Certificate.property.preCheckDelay"></a>

```python
pre_check_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preferred_chain`<sup>Required</sup> <a name="preferred_chain" id="@cdktf/provider-acme.certificate.Certificate.property.preferredChain"></a>

```python
preferred_chain: str
```

- *Type:* str

---

##### `recursive_nameservers`<sup>Required</sup> <a name="recursive_nameservers" id="@cdktf/provider-acme.certificate.Certificate.property.recursiveNameservers"></a>

```python
recursive_nameservers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `revoke_certificate_on_destroy`<sup>Required</sup> <a name="revoke_certificate_on_destroy" id="@cdktf/provider-acme.certificate.Certificate.property.revokeCertificateOnDestroy"></a>

```python
revoke_certificate_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subject_alternative_names`<sup>Required</sup> <a name="subject_alternative_names" id="@cdktf/provider-acme.certificate.Certificate.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.Certificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-acme.certificate.Certificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateConfig <a name="CertificateConfig" id="@cdktf/provider-acme.certificate.CertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.certificate.CertificateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_acme import certificate

certificate.CertificateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_key_pem: str,
  certificate_p12_password: str = None,
  certificate_request_pem: str = None,
  common_name: str = None,
  disable_complete_propagation: typing.Union[bool, IResolvable] = None,
  dns_challenge: typing.Union[IResolvable, typing.List[CertificateDnsChallenge]] = None,
  http_challenge: CertificateHttpChallenge = None,
  http_memcached_challenge: CertificateHttpMemcachedChallenge = None,
  http_s3_challenge: CertificateHttpS3Challenge = None,
  http_webroot_challenge: CertificateHttpWebrootChallenge = None,
  id: str = None,
  key_type: str = None,
  min_days_remaining: typing.Union[int, float] = None,
  must_staple: typing.Union[bool, IResolvable] = None,
  pre_check_delay: typing.Union[int, float] = None,
  preferred_chain: str = None,
  recursive_nameservers: typing.List[str] = None,
  revoke_certificate_on_destroy: typing.Union[bool, IResolvable] = None,
  subject_alternative_names: typing.List[str] = None,
  tls_challenge: CertificateTlsChallenge = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.accountKeyPem">account_key_pem</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#account_key_pem Certificate#account_key_pem}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.certificateP12Password">certificate_p12_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#certificate_p12_password Certificate#certificate_p12_password}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.certificateRequestPem">certificate_request_pem</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#certificate_request_pem Certificate#certificate_request_pem}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.commonName">common_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#common_name Certificate#common_name}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.disableCompletePropagation">disable_complete_propagation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#disable_complete_propagation Certificate#disable_complete_propagation}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.dnsChallenge">dns_challenge</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a>]]</code> | dns_challenge block. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.httpChallenge">http_challenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a></code> | http_challenge block. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.httpMemcachedChallenge">http_memcached_challenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a></code> | http_memcached_challenge block. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.httpS3Challenge">http_s3_challenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3Challenge">CertificateHttpS3Challenge</a></code> | http_s3_challenge block. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.httpWebrootChallenge">http_webroot_challenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a></code> | http_webroot_challenge block. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#id Certificate#id}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.keyType">key_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#key_type Certificate#key_type}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.minDaysRemaining">min_days_remaining</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#min_days_remaining Certificate#min_days_remaining}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.mustStaple">must_staple</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#must_staple Certificate#must_staple}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.preCheckDelay">pre_check_delay</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#pre_check_delay Certificate#pre_check_delay}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.preferredChain">preferred_chain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#preferred_chain Certificate#preferred_chain}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.recursiveNameservers">recursive_nameservers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#recursive_nameservers Certificate#recursive_nameservers}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.revokeCertificateOnDestroy">revoke_certificate_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#revoke_certificate_on_destroy Certificate#revoke_certificate_on_destroy}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#subject_alternative_names Certificate#subject_alternative_names}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateConfig.property.tlsChallenge">tls_challenge</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a></code> | tls_challenge block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-acme.certificate.CertificateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-acme.certificate.CertificateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-acme.certificate.CertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-acme.certificate.CertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-acme.certificate.CertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-acme.certificate.CertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-acme.certificate.CertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_key_pem`<sup>Required</sup> <a name="account_key_pem" id="@cdktf/provider-acme.certificate.CertificateConfig.property.accountKeyPem"></a>

```python
account_key_pem: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#account_key_pem Certificate#account_key_pem}.

---

##### `certificate_p12_password`<sup>Optional</sup> <a name="certificate_p12_password" id="@cdktf/provider-acme.certificate.CertificateConfig.property.certificateP12Password"></a>

```python
certificate_p12_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#certificate_p12_password Certificate#certificate_p12_password}.

---

##### `certificate_request_pem`<sup>Optional</sup> <a name="certificate_request_pem" id="@cdktf/provider-acme.certificate.CertificateConfig.property.certificateRequestPem"></a>

```python
certificate_request_pem: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#certificate_request_pem Certificate#certificate_request_pem}.

---

##### `common_name`<sup>Optional</sup> <a name="common_name" id="@cdktf/provider-acme.certificate.CertificateConfig.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#common_name Certificate#common_name}.

---

##### `disable_complete_propagation`<sup>Optional</sup> <a name="disable_complete_propagation" id="@cdktf/provider-acme.certificate.CertificateConfig.property.disableCompletePropagation"></a>

```python
disable_complete_propagation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#disable_complete_propagation Certificate#disable_complete_propagation}.

---

##### `dns_challenge`<sup>Optional</sup> <a name="dns_challenge" id="@cdktf/provider-acme.certificate.CertificateConfig.property.dnsChallenge"></a>

```python
dns_challenge: typing.Union[IResolvable, typing.List[CertificateDnsChallenge]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a>]]

dns_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#dns_challenge Certificate#dns_challenge}

---

##### `http_challenge`<sup>Optional</sup> <a name="http_challenge" id="@cdktf/provider-acme.certificate.CertificateConfig.property.httpChallenge"></a>

```python
http_challenge: CertificateHttpChallenge
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a>

http_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#http_challenge Certificate#http_challenge}

---

##### `http_memcached_challenge`<sup>Optional</sup> <a name="http_memcached_challenge" id="@cdktf/provider-acme.certificate.CertificateConfig.property.httpMemcachedChallenge"></a>

```python
http_memcached_challenge: CertificateHttpMemcachedChallenge
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a>

http_memcached_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#http_memcached_challenge Certificate#http_memcached_challenge}

---

##### `http_s3_challenge`<sup>Optional</sup> <a name="http_s3_challenge" id="@cdktf/provider-acme.certificate.CertificateConfig.property.httpS3Challenge"></a>

```python
http_s3_challenge: CertificateHttpS3Challenge
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpS3Challenge">CertificateHttpS3Challenge</a>

http_s3_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#http_s3_challenge Certificate#http_s3_challenge}

---

##### `http_webroot_challenge`<sup>Optional</sup> <a name="http_webroot_challenge" id="@cdktf/provider-acme.certificate.CertificateConfig.property.httpWebrootChallenge"></a>

```python
http_webroot_challenge: CertificateHttpWebrootChallenge
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a>

http_webroot_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#http_webroot_challenge Certificate#http_webroot_challenge}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-acme.certificate.CertificateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#id Certificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktf/provider-acme.certificate.CertificateConfig.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#key_type Certificate#key_type}.

---

##### `min_days_remaining`<sup>Optional</sup> <a name="min_days_remaining" id="@cdktf/provider-acme.certificate.CertificateConfig.property.minDaysRemaining"></a>

```python
min_days_remaining: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#min_days_remaining Certificate#min_days_remaining}.

---

##### `must_staple`<sup>Optional</sup> <a name="must_staple" id="@cdktf/provider-acme.certificate.CertificateConfig.property.mustStaple"></a>

```python
must_staple: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#must_staple Certificate#must_staple}.

---

##### `pre_check_delay`<sup>Optional</sup> <a name="pre_check_delay" id="@cdktf/provider-acme.certificate.CertificateConfig.property.preCheckDelay"></a>

```python
pre_check_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#pre_check_delay Certificate#pre_check_delay}.

---

##### `preferred_chain`<sup>Optional</sup> <a name="preferred_chain" id="@cdktf/provider-acme.certificate.CertificateConfig.property.preferredChain"></a>

```python
preferred_chain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#preferred_chain Certificate#preferred_chain}.

---

##### `recursive_nameservers`<sup>Optional</sup> <a name="recursive_nameservers" id="@cdktf/provider-acme.certificate.CertificateConfig.property.recursiveNameservers"></a>

```python
recursive_nameservers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#recursive_nameservers Certificate#recursive_nameservers}.

---

##### `revoke_certificate_on_destroy`<sup>Optional</sup> <a name="revoke_certificate_on_destroy" id="@cdktf/provider-acme.certificate.CertificateConfig.property.revokeCertificateOnDestroy"></a>

```python
revoke_certificate_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#revoke_certificate_on_destroy Certificate#revoke_certificate_on_destroy}.

---

##### `subject_alternative_names`<sup>Optional</sup> <a name="subject_alternative_names" id="@cdktf/provider-acme.certificate.CertificateConfig.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#subject_alternative_names Certificate#subject_alternative_names}.

---

##### `tls_challenge`<sup>Optional</sup> <a name="tls_challenge" id="@cdktf/provider-acme.certificate.CertificateConfig.property.tlsChallenge"></a>

```python
tls_challenge: CertificateTlsChallenge
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a>

tls_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#tls_challenge Certificate#tls_challenge}

---

### CertificateDnsChallenge <a name="CertificateDnsChallenge" id="@cdktf/provider-acme.certificate.CertificateDnsChallenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.certificate.CertificateDnsChallenge.Initializer"></a>

```python
from cdktf_cdktf_provider_acme import certificate

certificate.CertificateDnsChallenge(
  provider: str,
  config: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge.property.provider">provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#provider Certificate#provider}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge.property.config">config</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#config Certificate#config}. |

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-acme.certificate.CertificateDnsChallenge.property.provider"></a>

```python
provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#provider Certificate#provider}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-acme.certificate.CertificateDnsChallenge.property.config"></a>

```python
config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#config Certificate#config}.

---

### CertificateHttpChallenge <a name="CertificateHttpChallenge" id="@cdktf/provider-acme.certificate.CertificateHttpChallenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.certificate.CertificateHttpChallenge.Initializer"></a>

```python
from cdktf_cdktf_provider_acme import certificate

certificate.CertificateHttpChallenge(
  port: typing.Union[int, float] = None,
  proxy_header: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#port Certificate#port}. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge.property.proxyHeader">proxy_header</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#proxy_header Certificate#proxy_header}. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-acme.certificate.CertificateHttpChallenge.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#port Certificate#port}.

---

##### `proxy_header`<sup>Optional</sup> <a name="proxy_header" id="@cdktf/provider-acme.certificate.CertificateHttpChallenge.property.proxyHeader"></a>

```python
proxy_header: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#proxy_header Certificate#proxy_header}.

---

### CertificateHttpMemcachedChallenge <a name="CertificateHttpMemcachedChallenge" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge.Initializer"></a>

```python
from cdktf_cdktf_provider_acme import certificate

certificate.CertificateHttpMemcachedChallenge(
  hosts: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#hosts Certificate#hosts}. |

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#hosts Certificate#hosts}.

---

### CertificateHttpS3Challenge <a name="CertificateHttpS3Challenge" id="@cdktf/provider-acme.certificate.CertificateHttpS3Challenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.certificate.CertificateHttpS3Challenge.Initializer"></a>

```python
from cdktf_cdktf_provider_acme import certificate

certificate.CertificateHttpS3Challenge(
  s3_bucket: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3Challenge.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#s3_bucket Certificate#s3_bucket}. |

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktf/provider-acme.certificate.CertificateHttpS3Challenge.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#s3_bucket Certificate#s3_bucket}.

---

### CertificateHttpWebrootChallenge <a name="CertificateHttpWebrootChallenge" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge.Initializer"></a>

```python
from cdktf_cdktf_provider_acme import certificate

certificate.CertificateHttpWebrootChallenge(
  directory: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge.property.directory">directory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#directory Certificate#directory}. |

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge.property.directory"></a>

```python
directory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#directory Certificate#directory}.

---

### CertificateTlsChallenge <a name="CertificateTlsChallenge" id="@cdktf/provider-acme.certificate.CertificateTlsChallenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-acme.certificate.CertificateTlsChallenge.Initializer"></a>

```python
from cdktf_cdktf_provider_acme import certificate

certificate.CertificateTlsChallenge(
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#port Certificate#port}. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-acme.certificate.CertificateTlsChallenge.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.17.0/docs/resources/certificate#port Certificate#port}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificateDnsChallengeList <a name="CertificateDnsChallengeList" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.Initializer"></a>

```python
from cdktf_cdktf_provider_acme import certificate

certificate.CertificateDnsChallengeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CertificateDnsChallengeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CertificateDnsChallenge]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a>]]

---


### CertificateDnsChallengeOutputReference <a name="CertificateDnsChallengeOutputReference" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_acme import certificate

certificate.CertificateDnsChallengeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.resetConfig">reset_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_config` <a name="reset_config" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.resetConfig"></a>

```python
def reset_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.configInput">config_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.providerInput">provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.config">config</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.provider">provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.configInput"></a>

```python
config_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `provider_input`<sup>Optional</sup> <a name="provider_input" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.providerInput"></a>

```python
provider_input: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.config"></a>

```python
config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.provider"></a>

```python
provider: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-acme.certificate.CertificateDnsChallengeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CertificateDnsChallenge]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-acme.certificate.CertificateDnsChallenge">CertificateDnsChallenge</a>]

---


### CertificateHttpChallengeOutputReference <a name="CertificateHttpChallengeOutputReference" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_acme import certificate

certificate.CertificateHttpChallengeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.resetProxyHeader">reset_proxy_header</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_proxy_header` <a name="reset_proxy_header" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.resetProxyHeader"></a>

```python
def reset_proxy_header() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.proxyHeaderInput">proxy_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.proxyHeader">proxy_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proxy_header_input`<sup>Optional</sup> <a name="proxy_header_input" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.proxyHeaderInput"></a>

```python
proxy_header_input: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proxy_header`<sup>Required</sup> <a name="proxy_header" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.proxyHeader"></a>

```python
proxy_header: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-acme.certificate.CertificateHttpChallengeOutputReference.property.internalValue"></a>

```python
internal_value: CertificateHttpChallenge
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpChallenge">CertificateHttpChallenge</a>

---


### CertificateHttpMemcachedChallengeOutputReference <a name="CertificateHttpMemcachedChallengeOutputReference" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_acme import certificate

certificate.CertificateHttpMemcachedChallengeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.hostsInput">hosts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hosts_input`<sup>Optional</sup> <a name="hosts_input" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.hostsInput"></a>

```python
hosts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallengeOutputReference.property.internalValue"></a>

```python
internal_value: CertificateHttpMemcachedChallenge
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpMemcachedChallenge">CertificateHttpMemcachedChallenge</a>

---


### CertificateHttpS3ChallengeOutputReference <a name="CertificateHttpS3ChallengeOutputReference" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_acme import certificate

certificate.CertificateHttpS3ChallengeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.s3BucketInput">s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpS3Challenge">CertificateHttpS3Challenge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket_input`<sup>Optional</sup> <a name="s3_bucket_input" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.s3BucketInput"></a>

```python
s3_bucket_input: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-acme.certificate.CertificateHttpS3ChallengeOutputReference.property.internalValue"></a>

```python
internal_value: CertificateHttpS3Challenge
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpS3Challenge">CertificateHttpS3Challenge</a>

---


### CertificateHttpWebrootChallengeOutputReference <a name="CertificateHttpWebrootChallengeOutputReference" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_acme import certificate

certificate.CertificateHttpWebrootChallengeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.directoryInput">directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.directory">directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `directory_input`<sup>Optional</sup> <a name="directory_input" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.directoryInput"></a>

```python
directory_input: str
```

- *Type:* str

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.directory"></a>

```python
directory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-acme.certificate.CertificateHttpWebrootChallengeOutputReference.property.internalValue"></a>

```python
internal_value: CertificateHttpWebrootChallenge
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateHttpWebrootChallenge">CertificateHttpWebrootChallenge</a>

---


### CertificateTlsChallengeOutputReference <a name="CertificateTlsChallengeOutputReference" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_acme import certificate

certificate.CertificateTlsChallengeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-acme.certificate.CertificateTlsChallengeOutputReference.property.internalValue"></a>

```python
internal_value: CertificateTlsChallenge
```

- *Type:* <a href="#@cdktf/provider-acme.certificate.CertificateTlsChallenge">CertificateTlsChallenge</a>

---



