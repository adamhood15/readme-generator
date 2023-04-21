
//Pulls the value of license that was passed in by the user and generates a badge and link for the license.
function renderLicenseBadge(answers) {

  const { license } = answers;

  if (license !== 'None') {
    
    const licenseLink = `https://img.shields.io/static/v1?label=License&message=${license}&color=$blue`
    const licenseBadge = `![license](https://img.shields.io/static/v1?label=License&message=${license}&color=$blue)`
    return renderLicenseSection(answers, licenseLink, licenseBadge);

  } else {

    const licenseLink = '';
    const licenseBadge = '';
    return renderLicenseSection(answers, licenseLink, licenseBadge);
  
  }
}

//Builds the license section for the markdownj
function renderLicenseSection(answers, licenseLink, licenseBadge, license){
  if (license !== 'None') {
    const licenseSection = 
    `Notice: This application is covered under the ${licenseBadge} license.`
    return generateMarkdown(answers, licenseSection, licenseBadge, licenseLink)
  
  } else {
    const licenseSection = 
    `Notice: This application is not covered under a license.`
    return generateMarkdown(answers, licenseSection, licenseBadge, licenseLink);
  } 
}

// Generates the markdown for the readme file and creates it
function generateMarkdown(answers, licenseSection, licenseBadge, licenseLink) {

  const { userName, email, title, description, dependencies, tests, needToKnow, installation, openSource, credits } = answers;

  return markdown =
  `# ${title}
  ${licenseBadge}
  ## Description
  ${description}
  <font size='2'>
  ## Table of Contents
  * [Installation](#installation)\n
  * [Usage](#usage)\n
  * [License](#license)\n
  * [Contributing](#contributing)\n
  * [Tests](#tests)\n
  * [Questions](#questions)\n
  * [Credits](#credits)\n
  </font>
  ## Installation
  ${installation}
  
  To install dependencies, run the following command in the command line ${dependencies}.
  
  ## Usage
  ${needToKnow}
  
  To run tests, run the following command in the command line ${tests}.
  
  ## License
  ${licenseSection}\n
  Link: ${licenseLink}

  ## Contributing
  ${openSource}
  
  ## Questions
  Please reach out to me below if you have any questions.\n
  
  GitHub: [${userName}](https://github.com/${userName})\n
  Email: ${email}
  
  ## Credits
  ${credits}`;

}

module.exports = renderLicenseBadge;