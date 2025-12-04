
-- Insert comprehensive DSA topics
INSERT INTO public.dsa_topics (title, description, difficulty, category, icon, color, order_index) VALUES
('Arrays', 'Master array manipulation, searching, and optimization techniques', 'Easy', 'Basic Data Structures', 'grid-3x3', 'blue', 1),
('Strings', 'String processing, pattern matching, and manipulation algorithms', 'Easy', 'Basic Data Structures', 'type', 'green', 2),
('Linked Lists', 'Singly, doubly, and circular linked list operations', 'Easy', 'Basic Data Structures', 'link', 'purple', 3),
('Stacks', 'LIFO data structure and its applications', 'Easy', 'Basic Data Structures', 'layers', 'orange', 4),
('Queues', 'FIFO data structure and priority queue implementations', 'Easy', 'Basic Data Structures', 'queue', 'cyan', 5),
('Hash Tables', 'Hash maps, sets, and collision resolution techniques', 'Medium', 'Basic Data Structures', 'hash', 'red', 6),
('Binary Trees', 'Tree traversal, construction, and manipulation', 'Medium', 'Trees', 'git-branch', 'indigo', 7),
('Binary Search Trees', 'BST operations, validation, and balancing', 'Medium', 'Trees', 'tree-pine', 'teal', 8),
('Heaps', 'Min-heap, max-heap, and heap sort algorithms', 'Medium', 'Trees', 'triangle', 'pink', 9),
('Tries', 'Prefix trees for string processing and autocomplete', 'Medium', 'Trees', 'tree-deciduous', 'violet', 10),
('Graphs', 'Graph representation, traversal, and basic algorithms', 'Hard', 'Graphs', 'network', 'emerald', 11),
('Graph Algorithms', 'Advanced graph algorithms and shortest paths', 'Hard', 'Graphs', 'route', 'amber', 12),
('Dynamic Programming', 'Memoization, tabulation, and optimization problems', 'Hard', 'Advanced Algorithms', 'zap', 'rose', 13),
('Backtracking', 'Recursive problem solving with constraint satisfaction', 'Hard', 'Advanced Algorithms', 'shuffle', 'lime', 14),
('Sorting Algorithms', 'Comparison and non-comparison based sorting', 'Medium', 'Algorithms', 'arrow-up-down', 'sky', 15),
('Searching Algorithms', 'Binary search variations and optimization', 'Medium', 'Algorithms', 'search', 'slate', 16),
('Two Pointers', 'Efficient array and string processing technique', 'Medium', 'Techniques', 'move-horizontal', 'yellow', 17),
('Sliding Window', 'Subarray and substring optimization problems', 'Medium', 'Techniques', 'frame', 'fuchsia', 18),
('Greedy Algorithms', 'Local optimization for global solutions', 'Hard', 'Advanced Algorithms', 'target', 'neutral', 19),
('Bit Manipulation', 'Bitwise operations and number theory', 'Medium', 'Mathematics', 'binary', 'stone', 20);

-- Insert 15 problems for Arrays topic (assuming first topic)
WITH array_topic AS (SELECT id FROM dsa_topics WHERE title = 'Arrays' LIMIT 1)
INSERT INTO public.dsa_questions (topic_id, title, description, difficulty, leetcode_number, leetcode_url, company_tags, concepts, time_complexity, space_complexity, hints, solution_approach) 
SELECT 
  array_topic.id,
  title,
  description,
  difficulty,
  leetcode_number,
  leetcode_url,
  company_tags,
  concepts,
  time_complexity,
  space_complexity,
  hints,
  solution_approach
FROM array_topic,
(VALUES
  ('Two Sum', 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.', 'Easy', 1, 'https://leetcode.com/problems/two-sum/', ARRAY['Amazon', 'Google', 'Microsoft'], ARRAY['Hash Table', 'Array'], 'O(n)', 'O(n)', ARRAY['Use a hash map to store complements', 'Check if target - current exists'], 'Use hash map to store value-index pairs and check for complement'),
  ('Best Time to Buy and Sell Stock', 'Find the maximum profit from buying and selling stock once.', 'Easy', 121, 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', ARRAY['Amazon', 'Facebook', 'Microsoft'], ARRAY['Array', 'Dynamic Programming'], 'O(n)', 'O(1)', ARRAY['Track minimum price seen so far', 'Calculate profit at each step'], 'Keep track of minimum price and maximum profit'),
  ('Contains Duplicate', 'Determine if array contains any duplicates.', 'Easy', 217, 'https://leetcode.com/problems/contains-duplicate/', ARRAY['Apple', 'Google'], ARRAY['Array', 'Hash Table'], 'O(n)', 'O(n)', ARRAY['Use a set to track seen elements', 'Return true if element already exists'], 'Use hash set to detect duplicates'),
  ('Product of Array Except Self', 'Return array where each element is product of all other elements.', 'Medium', 238, 'https://leetcode.com/problems/product-of-array-except-self/', ARRAY['Amazon', 'Microsoft', 'Facebook'], ARRAY['Array', 'Prefix Sum'], 'O(n)', 'O(1)', ARRAY['Calculate left products first', 'Then calculate right products'], 'Two passes: left products then right products'),
  ('Maximum Subarray', 'Find the contiguous subarray with the largest sum.', 'Medium', 53, 'https://leetcode.com/problems/maximum-subarray/', ARRAY['Amazon', 'Microsoft', 'LinkedIn'], ARRAY['Array', 'Dynamic Programming'], 'O(n)', 'O(1)', ARRAY['Use Kadane''s algorithm', 'Track current and maximum sum'], 'Kadane''s algorithm for maximum subarray sum'),
  ('Maximum Product Subarray', 'Find the contiguous subarray with the largest product.', 'Medium', 152, 'https://leetcode.com/problems/maximum-product-subarray/', ARRAY['Amazon', 'LinkedIn'], ARRAY['Array', 'Dynamic Programming'], 'O(n)', 'O(1)', ARRAY['Track both max and min products', 'Handle negative numbers carefully'], 'Track maximum and minimum products at each position'),
  ('Find Minimum in Rotated Sorted Array', 'Find minimum element in rotated sorted array.', 'Medium', 153, 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/', ARRAY['Amazon', 'Microsoft'], ARRAY['Array', 'Binary Search'], 'O(log n)', 'O(1)', ARRAY['Use binary search', 'Compare with rightmost element'], 'Binary search comparing middle with right boundary'),
  ('Search in Rotated Sorted Array', 'Search target in rotated sorted array.', 'Medium', 33, 'https://leetcode.com/problems/search-in-rotated-sorted-array/', ARRAY['Amazon', 'Facebook', 'Microsoft'], ARRAY['Array', 'Binary Search'], 'O(log n)', 'O(1)', ARRAY['Identify which half is sorted', 'Search in appropriate half'], 'Modified binary search considering rotation'),
  ('3Sum', 'Find all unique triplets that sum to zero.', 'Medium', 15, 'https://leetcode.com/problems/3sum/', ARRAY['Amazon', 'Microsoft', 'Facebook'], ARRAY['Array', 'Two Pointers'], 'O(n²)', 'O(1)', ARRAY['Sort array first', 'Use two pointers for each element'], 'Sort array and use two pointers technique'),
  ('Container With Most Water', 'Find two lines that form container with most water.', 'Medium', 11, 'https://leetcode.com/problems/container-with-most-water/', ARRAY['Amazon', 'Facebook'], ARRAY['Array', 'Two Pointers'], 'O(n)', 'O(1)', ARRAY['Use two pointers from ends', 'Move pointer with smaller height'], 'Two pointers approach moving from smaller height'),
  ('Remove Duplicates from Sorted Array', 'Remove duplicates in-place from sorted array.', 'Easy', 26, 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/', ARRAY['Microsoft', 'Facebook'], ARRAY['Array', 'Two Pointers'], 'O(n)', 'O(1)', ARRAY['Use two pointers', 'One for reading, one for writing'], 'Two pointers: read pointer and write pointer'),
  ('Merge Sorted Array', 'Merge two sorted arrays in-place.', 'Easy', 88, 'https://leetcode.com/problems/merge-sorted-array/', ARRAY['Microsoft', 'Facebook'], ARRAY['Array', 'Two Pointers'], 'O(m+n)', 'O(1)', ARRAY['Start from the end', 'Compare and place larger element'], 'Merge from end to avoid overwriting'),
  ('Move Zeroes', 'Move all zeros to end while maintaining relative order.', 'Easy', 283, 'https://leetcode.com/problems/move-zeroes/', ARRAY['Facebook', 'Amazon'], ARRAY['Array', 'Two Pointers'], 'O(n)', 'O(1)', ARRAY['Use two pointers', 'Swap non-zero elements forward'], 'Two pointers to swap non-zero elements'),
  ('Rotate Array', 'Rotate array to the right by k steps.', 'Medium', 189, 'https://leetcode.com/problems/rotate-array/', ARRAY['Microsoft', 'Amazon'], ARRAY['Array', 'Math'], 'O(n)', 'O(1)', ARRAY['Reverse entire array', 'Reverse first k elements', 'Reverse remaining elements'], 'Three reversals approach'),
  ('Missing Number', 'Find missing number in array containing n distinct numbers.', 'Easy', 268, 'https://leetcode.com/problems/missing-number/', ARRAY['Microsoft', 'Amazon'], ARRAY['Array', 'Math', 'Bit Manipulation'], 'O(n)', 'O(1)', ARRAY['Use sum formula', 'Or use XOR properties'], 'Mathematical sum or XOR approach')
) AS problems(title, description, difficulty, leetcode_number, leetcode_url, company_tags, concepts, time_complexity, space_complexity, hints, solution_approach);

-- Insert 15 problems for Strings topic
WITH string_topic AS (SELECT id FROM dsa_topics WHERE title = 'Strings' LIMIT 1)
INSERT INTO public.dsa_questions (topic_id, title, description, difficulty, leetcode_number, leetcode_url, company_tags, concepts, time_complexity, space_complexity, hints, solution_approach)
SELECT 
  string_topic.id,
  title,
  description,
  difficulty,
  leetcode_number,
  leetcode_url,
  company_tags,
  concepts,
  time_complexity,
  space_complexity,
  hints,
  solution_approach
FROM string_topic,
(VALUES
  ('Valid Anagram', 'Determine if two strings are anagrams of each other.', 'Easy', 242, 'https://leetcode.com/problems/valid-anagram/', ARRAY['Amazon', 'Facebook'], ARRAY['Hash Table', 'String'], 'O(n)', 'O(1)', ARRAY['Count character frequencies', 'Compare frequency maps'], 'Count character frequencies and compare'),
  ('Valid Palindrome', 'Check if string is a palindrome considering only alphanumeric characters.', 'Easy', 125, 'https://leetcode.com/problems/valid-palindrome/', ARRAY['Microsoft', 'Facebook'], ARRAY['Two Pointers', 'String'], 'O(n)', 'O(1)', ARRAY['Use two pointers from ends', 'Skip non-alphanumeric characters'], 'Two pointers approach ignoring non-alphanumeric'),
  ('Longest Substring Without Repeating Characters', 'Find length of longest substring without repeating characters.', 'Medium', 3, 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', ARRAY['Amazon', 'Microsoft', 'Google'], ARRAY['Hash Table', 'String', 'Sliding Window'], 'O(n)', 'O(min(m,n))', ARRAY['Use sliding window technique', 'Track character positions with hash map'], 'Sliding window with hash map for character positions'),
  ('Longest Palindromic Substring', 'Find the longest palindromic substring.', 'Medium', 5, 'https://leetcode.com/problems/longest-palindromic-substring/', ARRAY['Amazon', 'Microsoft'], ARRAY['String', 'Dynamic Programming'], 'O(n²)', 'O(1)', ARRAY['Expand around centers', 'Check both odd and even length palindromes'], 'Expand around centers for each possible center'),
  ('Group Anagrams', 'Group strings that are anagrams of each other.', 'Medium', 49, 'https://leetcode.com/problems/group-anagrams/', ARRAY['Amazon', 'Facebook', 'Uber'], ARRAY['Hash Table', 'String'], 'O(n*k*log(k))', 'O(n*k)', ARRAY['Sort each string as key', 'Group by sorted string'], 'Use sorted string as hash key'),
  ('Valid Parentheses', 'Determine if parentheses string is valid.', 'Easy', 20, 'https://leetcode.com/problems/valid-parentheses/', ARRAY['Amazon', 'Microsoft', 'Facebook'], ARRAY['String', 'Stack'], 'O(n)', 'O(n)', ARRAY['Use stack for opening brackets', 'Check matching closing brackets'], 'Stack to match opening and closing brackets'),
  ('String to Integer (atoi)', 'Convert string to 32-bit signed integer.', 'Medium', 8, 'https://leetcode.com/problems/string-to-integer-atoi/', ARRAY['Amazon', 'Microsoft'], ARRAY['Math', 'String'], 'O(n)', 'O(1)', ARRAY['Handle whitespace and signs', 'Check for overflow'], 'Parse string handling edge cases and overflow'),
  ('Implement strStr()', 'Find first occurrence of needle in haystack.', 'Easy', 28, 'https://leetcode.com/problems/implement-strstr/', ARRAY['Facebook', 'Microsoft'], ARRAY['Two Pointers', 'String'], 'O(n*m)', 'O(1)', ARRAY['Use sliding window approach', 'Or implement KMP algorithm'], 'Sliding window or KMP pattern matching'),
  ('Longest Common Prefix', 'Find longest common prefix among array of strings.', 'Easy', 14, 'https://leetcode.com/problems/longest-common-prefix/', ARRAY['Amazon', 'Google'], ARRAY['String'], 'O(S)', 'O(1)', ARRAY['Compare characters vertically', 'Stop at first mismatch'], 'Vertical scanning of characters'),
  ('Letter Combinations of Phone Number', 'Generate all possible letter combinations from phone number.', 'Medium', 17, 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/', ARRAY['Amazon', 'Facebook'], ARRAY['String', 'Backtracking'], 'O(3^n * 4^m)', 'O(3^n * 4^m)', ARRAY['Use backtracking', 'Map digits to letters'], 'Backtracking to generate all combinations'),
  ('Generate Parentheses', 'Generate all combinations of well-formed parentheses.', 'Medium', 22, 'https://leetcode.com/problems/generate-parentheses/', ARRAY['Amazon', 'Facebook'], ARRAY['String', 'Backtracking'], 'O(4^n/√n)', 'O(4^n/√n)', ARRAY['Use backtracking with constraints', 'Track open and close counts'], 'Backtracking with open/close parentheses count'),
  ('Remove Invalid Parentheses', 'Remove minimum invalid parentheses to make string valid.', 'Hard', 301, 'https://leetcode.com/problems/remove-invalid-parentheses/', ARRAY['Facebook', 'Google'], ARRAY['String', 'BFS'], 'O(2^n)', 'O(n)', ARRAY['Count invalid parentheses', 'Use BFS to find minimum removals'], 'BFS to find minimum character removals'),
  ('Palindromic Substrings', 'Count number of palindromic substrings.', 'Medium', 647, 'https://leetcode.com/problems/palindromic-substrings/', ARRAY['Facebook', 'LinkedIn'], ARRAY['String', 'Dynamic Programming'], 'O(n²)', 'O(1)', ARRAY['Expand around each center', 'Count palindromes of all lengths'], 'Expand around centers counting palindromes'),
  ('Decode Ways', 'Count ways to decode a string of digits.', 'Medium', 91, 'https://leetcode.com/problems/decode-ways/', ARRAY['Facebook', 'Uber'], ARRAY['String', 'Dynamic Programming'], 'O(n)', 'O(1)', ARRAY['Use dynamic programming', 'Consider single and double digit decodings'], 'Dynamic programming considering 1 and 2 digit codes'),
  ('Edit Distance', 'Find minimum edit distance between two strings.', 'Hard', 72, 'https://leetcode.com/problems/edit-distance/', ARRAY['Amazon', 'Google'], ARRAY['String', 'Dynamic Programming'], 'O(m*n)', 'O(m*n)', ARRAY['Use 2D DP table', 'Consider insert, delete, replace operations'], '2D DP table for minimum edit operations')
) AS problems(title, description, difficulty, leetcode_number, leetcode_url, company_tags, concepts, time_complexity, space_complexity, hints, solution_approach);

-- Continue with remaining topics (Linked Lists)
WITH linkedlist_topic AS (SELECT id FROM dsa_topics WHERE title = 'Linked Lists' LIMIT 1)
INSERT INTO public.dsa_questions (topic_id, title, description, difficulty, leetcode_number, leetcode_url, company_tags, concepts, time_complexity, space_complexity, hints, solution_approach)
SELECT 
  linkedlist_topic.id,
  title,
  description,
  difficulty,
  leetcode_number,
  leetcode_url,
  company_tags,
  concepts,
  time_complexity,
  space_complexity,
  hints,
  solution_approach
FROM linkedlist_topic,
(VALUES
  ('Reverse Linked List', 'Reverse a singly linked list.', 'Easy', 206, 'https://leetcode.com/problems/reverse-linked-list/', ARRAY['Amazon', 'Microsoft', 'Facebook'], ARRAY['Linked List'], 'O(n)', 'O(1)', ARRAY['Use three pointers: prev, curr, next', 'Iteratively reverse links'], 'Three pointers to reverse links iteratively'),
  ('Merge Two Sorted Lists', 'Merge two sorted linked lists into one.', 'Easy', 21, 'https://leetcode.com/problems/merge-two-sorted-lists/', ARRAY['Amazon', 'Microsoft'], ARRAY['Linked List', 'Recursion'], 'O(m+n)', 'O(1)', ARRAY['Compare nodes and link smaller one', 'Use dummy head for simplicity'], 'Compare nodes and merge with dummy head'),
  ('Linked List Cycle', 'Detect if linked list has a cycle.', 'Easy', 141, 'https://leetcode.com/problems/linked-list-cycle/', ARRAY['Amazon', 'Microsoft', 'Facebook'], ARRAY['Linked List', 'Two Pointers'], 'O(n)', 'O(1)', ARRAY['Use Floyd''s cycle detection', 'Fast and slow pointers'], 'Floyd''s tortoise and hare algorithm'),
  ('Remove Nth Node From End', 'Remove nth node from end of linked list.', 'Medium', 19, 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/', ARRAY['Amazon', 'Facebook'], ARRAY['Linked List', 'Two Pointers'], 'O(n)', 'O(1)', ARRAY['Use two pointers with n gap', 'Handle edge cases'], 'Two pointers separated by n positions'),
  ('Add Two Numbers', 'Add two numbers represented as linked lists.', 'Medium', 2, 'https://leetcode.com/problems/add-two-numbers/', ARRAY['Amazon', 'Microsoft', 'Facebook'], ARRAY['Linked List', 'Math'], 'O(max(m,n))', 'O(max(m,n))', ARRAY['Simulate addition with carry', 'Handle different lengths'], 'Simulate digit addition with carry'),
  ('Intersection of Two Linked Lists', 'Find intersection node of two linked lists.', 'Easy', 160, 'https://leetcode.com/problems/intersection-of-two-linked-lists/', ARRAY['Amazon', 'Microsoft'], ARRAY['Linked List', 'Two Pointers'], 'O(m+n)', 'O(1)', ARRAY['Use two pointers switching lists', 'They meet at intersection'], 'Two pointers switching between lists'),
  ('Palindrome Linked List', 'Check if linked list is palindrome.', 'Easy', 234, 'https://leetcode.com/problems/palindrome-linked-list/', ARRAY['Amazon', 'Facebook'], ARRAY['Linked List', 'Two Pointers'], 'O(n)', 'O(1)', ARRAY['Find middle, reverse second half', 'Compare both halves'], 'Find middle, reverse second half, compare'),
  ('Remove Duplicates from Sorted List', 'Remove duplicates from sorted linked list.', 'Easy', 83, 'https://leetcode.com/problems/remove-duplicates-from-sorted-list/', ARRAY['Amazon'], ARRAY['Linked List'], 'O(n)', 'O(1)', ARRAY['Compare current with next', 'Skip duplicate nodes'], 'Compare adjacent nodes and skip duplicates'),
  ('Linked List Cycle II', 'Find start of cycle in linked list.', 'Medium', 142, 'https://leetcode.com/problems/linked-list-cycle-ii/', ARRAY['Amazon', 'Microsoft'], ARRAY['Linked List', 'Two Pointers'], 'O(n)', 'O(1)', ARRAY['Use Floyd''s algorithm', 'Reset one pointer to head after meeting'], 'Floyd''s algorithm with cycle start detection'),
  ('Reorder List', 'Reorder linked list in specific pattern.', 'Medium', 143, 'https://leetcode.com/problems/reorder-list/', ARRAY['Amazon', 'Facebook'], ARRAY['Linked List'], 'O(n)', 'O(1)', ARRAY['Find middle, reverse second half', 'Merge two halves alternately'], 'Split, reverse second half, merge alternately'),
  ('Sort List', 'Sort linked list in O(n log n) time.', 'Medium', 148, 'https://leetcode.com/problems/sort-list/', ARRAY['Amazon', 'Facebook'], ARRAY['Linked List', 'Divide and Conquer'], 'O(n log n)', 'O(log n)', ARRAY['Use merge sort approach', 'Split list in middle recursively'], 'Merge sort with linked list splitting'),
  ('Reverse Nodes in k-Group', 'Reverse nodes in groups of k.', 'Hard', 25, 'https://leetcode.com/problems/reverse-nodes-in-k-group/', ARRAY['Amazon', 'Microsoft'], ARRAY['Linked List', 'Recursion'], 'O(n)', 'O(1)', ARRAY['Count k nodes first', 'Reverse if k nodes available'], 'Count k nodes then reverse group'),
  ('Copy List with Random Pointer', 'Deep copy linked list with random pointers.', 'Medium', 138, 'https://leetcode.com/problems/copy-list-with-random-pointer/', ARRAY['Amazon', 'Microsoft'], ARRAY['Linked List', 'Hash Table'], 'O(n)', 'O(n)', ARRAY['Use hash map to track nodes', 'Or interweave original and copy'], 'Hash map or interweaving technique'),
  ('Flatten Multilevel Doubly Linked List', 'Flatten multilevel doubly linked list.', 'Medium', 430, 'https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/', ARRAY['Amazon'], ARRAY['Linked List', 'DFS'], 'O(n)', 'O(n)', ARRAY['Use DFS with stack', 'Process child nodes first'], 'DFS traversal with stack for child nodes'),
  ('Rotate List', 'Rotate linked list to the right by k places.', 'Medium', 61, 'https://leetcode.com/problems/rotate-list/', ARRAY['Amazon'], ARRAY['Linked List', 'Two Pointers'], 'O(n)', 'O(1)', ARRAY['Find length and make circular', 'Break at appropriate position'], 'Make circular then break at rotation point')
) AS problems(title, description, difficulty, leetcode_number, leetcode_url, company_tags, concepts, time_complexity, space_complexity, hints, solution_approach);
