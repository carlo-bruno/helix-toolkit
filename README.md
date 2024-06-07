# Helix Toolkit

## Motivation

I want to create a web app of tools that will help me create and update my Helix/HX Stomp patches

## Features:

- Online Preset viewer
  - Show what is in a preset without firing up HX Edit/Helix Native
  - Show multiple patches at the same time
- Blocks pastebin
  - Have boxes where I can paste a block and all its settings so I can copy/paste different effects with ease
- Preset Diff (highlight difference between 2 presets)
  - Highlight difference between 2 presets
- Tuner
  - Always on Tuner, can be turned off or hidden

## TODOs:

#### UI, framework, utils

- [x] Initial deploy, Vercel
- [x] Design basic layout
- [x] Component: Toolkit Sidebar
- [ ] Revisit Component: Sidebar toggle switches
- [ ] Revisit Component: Sidebar show/hide
- [ ] State management: Setup Zustand
- [ ] State: Preset
- [ ] State: UI, toggle specific tools
- [ ] Analytics

#### Preset viewer

- [x] Get HX Assets: catalog and category icons
- [x] Initial implementation: File reader
- [ ] Initial implementation: Show HX Stomp patches, 1 dsp, 8 blocks
- [ ] Add default preset
- [ ] Component: Effects Blocks
- [ ] Component: Input/Output
- [ ] Component: Path
- [ ] Implementation for Helix patches, 2 dsp
- [ ] Component: Arrow points Path 1A,1B to 2A,2B \*
- [ ] Revisit: File upload
- [ ] Feature: Drag and drop files to window \*

#### Extending Preset viewer

- [ ] Feature: Show footswitch configuration
- [ ] Feature: Show multiple presets \*
- [ ] Preset Diff functionality \*
- [ ] Component: Diff block highlight \*

#### Pastebin

- [ ] Get HX Assets: model icons
- [ ] Feature: Pastebin, ability to Copy/Paste blocks
- [ ] Component: Pastebin Blocks
- [ ] Component: Pastebin Effects Image
- [ ] Pastebin Persistence, local storage
- [ ] Pastebin Persistence, Accounts and saved data \*

#### Tuner

- [ ] Feature: Tuner, connect audio interface to web app
- [ ] Feature: set up audio, pitch detection
- [ ] Component: Tuner
- [ ] Enable/Disable Tuner
- [ ] Show/Hide Tuner
