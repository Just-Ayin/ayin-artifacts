# Ayin Artifacts
Here you will find helpful artifacts and interfaces to integrate with Ayin DEX.

## Table of contents
1. Available interfaces
2. Usage

## Available Interfaces
The interfaces and related Ralph data structures are located in `contracts/clamm/library`
1. IPoolCL - The backbone of concentrated liuqidity pools - responsible for data storage and calculations.
2. IPoolFactory - The primary contract for creating pools and interacting with them. All user calls that change state have to go through here
3. INFTPositionManager - The interface for managing NFT positions in the Ayin DEX. This is the default option on the frontend and is necessary to have positions visible in the Ayin UI.
4. IVersioned - Get the version of each contract

## Usage
Recommended way to use this repository: git submodule (for TS contract SDK).
Ralph interfaces can be copied and pasted into your project. These interfaces are located in `contracts/clamm/library`.
