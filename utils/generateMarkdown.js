// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  

  ${data.license == "Apache 2.0 License" ? "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  : data.license == "Boost Software License 1.0" ? "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  : data.license == "Creative Commons CC0" ? "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
  : data.license == "Eclipse Public License 1.0" ? "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  : data.license == "GNU GPL v2" ? "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  : data.license == "GNU GPL v3" ? "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  : data.license == "Hippocratic License 2.1" ? "[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)"
  : data.license == "Hippocratic License 3.0" ? "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)"
  : data.license == "IBM Public License Version 1.0" ? "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  : data.license == "ISC License (ISC)" ? "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  : data.license == "MIT License" ? "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  : data.license == "Mozilla Public License 2.0" ? "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  : data.license == "Open Data Commons Attribution License (BY)" ? "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)"
  : data.license == "Open Database License (ODbL)" ? "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)"
  : data.license == "Public Domain Dedication and License (PDDL)" ? "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)"
  : ""
}

<div id="description"></div>  

## Description  

${data.description}

## Table of Contents  

- [Description](#description)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Credits](#credits)  
- [License](#license)  
- [Contributing](#contributing)  
- [Tests](#tests)  
- [Questions](#questions)


<div id="installation"></div>  

## Installation  

${data.installation}  


<div id="usage"></div>  

## Usage  
  
${data.deployment == null ? "" : `[Link to Deployed ${data.title}](${data.deployment})`}  

${data.repo == null ? "" : `[Link to Project Code Repository](${data.repo})`}  

${data.demo == null ? "" : `[Screenshot / Demo of the Project Application](${data.demo})`}  

${data.usage}  

<div id="credits"></div>  

## Credits  

${data.credits}  

<div id="license"></div>  

## License  

This project is covered under the ${data.license}. Please refer to the LICENSE documentation for further information.  

<div id="contributing"></div>  

## Contributing  

${data.contributing}  

<div id="tests"></div>  

## Tests  

${data.tests}  

<div id="questions"></div>  

## Questions  

Please feel free to reach out with any questions or feedback you might have. You can contact me through:  

* GitHub: [@${data.github}](https://github.com/${data.github})
* Email: ${data.email}

`;
}

module.exports = generateMarkdown;
