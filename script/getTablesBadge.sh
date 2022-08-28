#Get badge-simple
cat README.md | grep "|" | tail -n "$(("$(cat README.md | grep '|' | wc -l)" - 7))" | cut -d '|' -f 3 |  cut -d "(" -f1 | sed 's/!/[!/p' | sed 's/]/]]/p' | uniq > badge.txt

#Get badge-url
cat README.md | grep "|" | tail -n "$(("$(cat README.md | grep '|' | wc -l)" - 7))" | cut -d '|' -f 3 |  cut -d "(" -f1 | cut -d "!" -f 2 | sed "s/]/-url]/p" | sed "s/ Badge/ Badge-url/p" | uniq> badgeUrl.txt


#Prepare badge-simple
i=0;while IFS= read -r line; do echo $line"###$i";((i=i+1)); done<badge.txt >badgeBack.txt

#Final

i=0;while IFS= read -r line; do sed -i "0,/###$i/s//$line/"  badgeBack.txt;((i=i+1)); done < badgeUrl.txt

#Format

cat badgeBack.txt |sed 's/^ *//;s/ *$//'| sed "s/Badge  / | /p" | uniq | sed "s/\[/ \| \[/p" | sed "s/\$/\ | /" | sed "s/-* //p"| uniq | sed "s/ -/| -/p" | uniq >badgeUrlFormat.txt

