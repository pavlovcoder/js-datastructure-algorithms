export function run(): void {
    // Header section:
    console.log('-----------------------------------------');
    console.log('TypeScript CLI Application || Data Structure & Algorithms');
    console.log('-----------------------------------------\n');
    console.log('Task:');
    console.log('-----------------------------------------');
    console.log('Write a TypeScript CLI Appication for implementation all available types of searching and filtering algorithms.\n');
    console.log('Solution:');
    console.log('-----------------------------------------');
    let timeFrame: number = 2000;
    let list: number[] = [45, 67, 89, 34, 12];
    let value: number = 35;
    procedureLinearSearch(list, value);
    setTimeout(() => {
        displayCopyright();
    }, timeFrame)
}

export function procedureLinearSearch(list: number[], value: number): void {
    console.log('1. Procedure for linear search given list:')
    console.log(`list received:`);
    console.log(list);
    console.log(`Search element = ${value}`);
    let i: number = 0;
    while (i < list.length) {
        if (list[i] === value) {
            console.log(`Element ${value} found at position: ${i + 1}.`);
            break;
        }
        i++;
        if (i == list.length) {
            console.log(`Element ${value} is not found at list.`);
        }
    }
}

export function displayCopyright(): void {
    console.log('\n-----------------------------------------')
    console.log('Copyright 2019 Vladimir Pavlov. All Rights Reserved');
    console.log('-----------------------------------------');
}