find . -type f -name '*Group*' | while read FILE ; do
    newfile="$(echo ${FILE} |sed -e 's/Group\s/produto/')" ;
    mv "${FILE}" "${newfile}" ;
done 