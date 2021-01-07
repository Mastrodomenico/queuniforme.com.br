find . -name 'Group *' | while read FILE ; do
echo ${FILE} |sed -e 's/Group\s/produto/'
    # newfile="$(echo ${FILE} |sed -e 's/Group\s/produto/')" ;
    # mv "${FILE}" "${newfile}" ;
done 