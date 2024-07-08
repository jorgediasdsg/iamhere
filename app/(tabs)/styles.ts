import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  title: {
    color: '#fdfcfe',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  date: {
    color: '#6b6b6b',
    fontSize: 16,
    marginTop: 16,
  },
  input: {
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FFF',
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 12,
  },
  button: {
    height: 56,
    width: 56,
    backgroundColor: '#31cf67',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },
  listEmpty: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 24,
  },
});
