# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2020-11-13
Initial Release

### Added
- snippets command
- ppcom and ppcommand snippet for javascript
- ppcom and ppcommand snippet for typescript

## [1.1.0] - 2020-11-21
### Removed
- needVip command property for javascript
- needVip command property for typescript

## [1.2.0] - 2020-11-21
### Added
- ppembed and ppembedoptions snippet for javascript
- ppembed and ppembedoptions snippet for typescript

## [1.3.0] - 2020-11-29
### Added
- ppclass snippet for java
- ppclassvalue and ppclassval snippet for java
- ppclassmethod, ppclassfunc and ppclassfunction snippet for java
- ppcon and ppconstructor snippet for java
- ppenum snippet for java
- ppinterface snippet for java

## [1.4.0] - 2020-11-29
I updated by accident

## [1.4.1] - 2020-11-29
I changed package.json version by accident

## [1.4.2] - 2020-11-29
### Changed
- years are now four characters

## [1.4.3] - 2020-11-29
### Added
- since to class values for java

## [1.4.4] - 2020-11-29
### Fixed
- the order of class values snippet for java

### Changed
- removed unneeded snippet positions for java

## [1.5.0] - 2020-11-29
### Java
#### Added
- const and constant snippet
- @version check for numbers and dots only
- automatic captialize of class, enum and interface name

#### Changed
- ppclass to class
- ppclassvalue and ppclassval to variable and var
- ppclassmethod, ppclassfunction and ppclassfunc to method
- ppcon and ppconstructor to con and constructor
- ppenum to enum
- ppinterface to interface
- @since default value to Y-M-D with optional H:M:S

### JavaScript
#### Added
- default discord.js require to cmd snippet
- optional pixel-pizza require to cmd snippet
- JSDoc comments to execute in cmd snippet
- boolean true, false choice
- cmd usertype choice with types

#### Changed
- ppcommand and ppcom to command and cmd
- ppembed and ppembedoptions to embed and embedoptions
- cmd neededPerms to uppercase

### TypeScript
#### Added
- default discord.js require to cmd snippet
- optional pixel-pizza require to cmd snippet
- JSDoc comments to execute in cmd snippet
- boolean true, false choice
- cmd usertype choice with types
- cmd client PPClient and discord client choice

#### Changed
- ppcommand and ppcom to command and cmd
- ppembed and ppembedoptions to embed and embedoptions
- cmd neededPerms to uppercase