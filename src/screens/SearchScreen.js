import React, {useState} from 'react';
import { StyleSheet, View, Text,ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultByPrice = (price) => {
        //price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };
     
    return ( 
        <>
            <SearchBar term={term}
                onTermChange={setTerm}
                onTermSubmit = {() => searchApi(term)}
            />
            {errorMessage ?<Text>{errorMessage }</Text> : null}
           
            <ScrollView>
                <ResultsList
                    results={filterResultByPrice('$')}
                    title="Cost Effective"
                   
                />
                <ResultsList
                    results={filterResultByPrice('$$')}
                    title="Pricier"
                    
                />
                <ResultsList
                    results={filterResultByPrice('$$$')}
                    title="Big Spender"
                    
                />
            </ScrollView>
        </>
     );
}

const styles = StyleSheet.create({
    
})
export default SearchScreen;