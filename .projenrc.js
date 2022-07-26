const { CdktfProviderProject } = require("@cdktf/provider-project");
const project = new CdktfProviderProject({
  terraformProvider: "vancluever/acme@~> 2.10",
  cdktfVersion: "^0.12.0",
  constructsVersion: "^10.0.0",
  minNodeVersion: "14.17.0",
  jsiiVersion: "^1.53.0",
});

project.synth();
