# playwright-threshold
run `npm i`

run `npm run test:e2e`

# Expected 
fails and passes will be constant between thresholds ( 0.7 and 0.8 )

# Observed
test are passing/failing in the same way for 
- images with subtle changes ( all except landing-Desktop-Chrome-darwin.png )
- chrome with bigger diff

so main idea is - there is no way to not fail on subtle diffs but fail on major ones
