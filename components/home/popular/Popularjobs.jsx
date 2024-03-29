import { useState } from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";

import styles from "./popularjobs.style";
import useFetch from "../../../hook/useFetch";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

const Popularjobs = () => {
    const router = useRouter();
    const [selectedJob, setSelectedJob] = useState();

    const { data, error, isLoading } = useFetch("search", { query: "React developer", num_pages: "1" });

    const handleCardPress = (item) => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>
                    Popular jobs
                </Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>
                        Show all
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size="large" color={COLORS.primary} />
                ) : error ? (
                    <Text>Something when wrong</Text>
                ) : (
                    <FlatList data={data} renderItem={({ item }) => (
                        <PopularJobCard item={item} selectedJob={selectedJob} handleCardPress={handleCardPress} />
                    )}
                        keyExtractor={item => item?.job_id}
                        contentContainerStyle={{ columnGap: SIZES.medium }}
                        horizontal
                    />
                )}
            </View>
        </View>
    )
}

export default Popularjobs;