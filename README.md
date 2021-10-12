# Purpose
created as a repro for [issue](https://github.com/microsoft/playwright/issues/9444) 

# playwright-threshold
run `npm i`

run `npm run test:e2e`

# Expected 
subtle fails must be detected only on lower thresholds
major fails must be accepted on higher thresholds

# Observed
test are passing/failing in the same way for 
- images with minor changes - github stars count 
- images with major changes - github stars count + some colorful pic

<img width="1745" alt="Screenshot 2021-10-12 at 18 18 01" src="https://user-images.githubusercontent.com/7899764/137027447-97c065d3-58f6-405f-8866-4b4f270d59be.png">


so the main idea is - there is no way to not fail on subtle diffs but fail on major ones 
<img width="681" alt="Screenshot 2021-10-12 at 23 48 31" src="https://user-images.githubusercontent.com/7899764/137027395-da7594f9-e7ae-4cf9-be7f-6f6607fd0ac1.png">
