```
package com.p.java8.array;

import java.util.Arrays;
import java.util.Map;
import java.util.stream.Collectors;

public class Arr {
    public static void main(String[] args) {
        String str="I love my India";

        String reversed=str.chars().mapToObj(ch->String.valueOf((char)ch))
                .reduce("",(acc,s)->s+acc);
        System.out.println(reversed);

        String rev="";

        for(int i=str.length()-1;i>=0;i--){
            rev+=str.charAt(i);
        }

        System.out.println(rev);

        reversed = str.chars()
                .mapToObj(c -> (char) c)
                .collect(StringBuilder::new,
                        (sb, c) -> sb.insert(0, c),
                        StringBuilder::append)
                .toString();

        System.out.println(reversed);
    }
}



```