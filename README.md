# playwright-threshold
run `npm i`

run `npm run test:e2e`

# Expected 
subtle fails must be detected only on lower thresholds
major fails must be accepted on higher thresholds

# Observed
test are passing/failing in the same way for 
- images with subtle changes - github stars count ( all except landing-Desktop-Chrome-darwin.png )
<img width="196" alt="Screenshot 2021-10-12 at 11 42 52" src="https://user-images.githubusercontent.com/7899764/136923829-216878ac-d382-465d-8546-2d97aec83acc.png">

- chrome with bigger diff - only star changes are detected
<img width="617" alt="Screenshot 2021-10-12 at 11 43 12" src="https://user-images.githubusercontent.com/7899764/136923957-48fae894-7864-49b9-a6ac-68dd88395aef.png">
<img width="628" alt="Screenshot 2021-10-12 at 11 43 01" src="https://user-images.githubusercontent.com/7899764/136923961-036097cf-447e-4320-937a-aa3e502cca7d.png">

<img width="502" alt="Screenshot 2021-10-12 at 11 32 57" src="https://user-images.githubusercontent.com/7899764/136921399-445d1804-1bc0-4775-a9ba-efc006267dd9.png">

so the main idea is - there is no way to not fail on subtle diffs but fail on major ones correct solution would be to fail only chrome picture in 0.7 threshold
